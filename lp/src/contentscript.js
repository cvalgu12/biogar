/*global chrome, html2canvas */
/*
 * The Great Suspender
 * Copyright (C) 2015 Dean Oemcke
 * Available under GNU GENERAL PUBLIC LICENSE v2
 * http://github.com/deanoemcke/thegreatsuspender
 * ლ(ಠ益ಠლ)
 */

(function() {
    'use strict';

    var tabId,
        readyStateCheckInterval,
        inputState = false,
        tempWhitelist = false,
        timerJob,
        timerUp = false,
        suspendTime,
        suspendedEl = document.getElementById('gsTopBar');

    //safety check here. don't load content script if we are on the suspended page
    if (suspendedEl) { return; }

    function init() {

        //do startup jobs
        reportState(false);
        requestPreferences(function(response) {

            //set timer job
            if (response && response.suspendTime > 0) {

                suspendTime = response.suspendTime * (1000 * 60);
                timerJob = setTimerJob(suspendTime);

            } else {
                suspendTime = 0;
            }

            //add form input listener
            if (response && response.dontSuspendForms) {
                setFormInputJob();
            }

            if (response && response.tabId) {

                //set tabId
                tabId = response.tabId;

                //handle auto-scrolling
                var scrollPos = getCookieValue('gsScrollPos-' + tabId);
                if (scrollPos && scrollPos !== "") {
                    document.body.scrollTop = scrollPos;
                    setCookieValue('gsScrollPos-' + tabId, '');
                }
            }
        });
    }

    function calculateState() {
        var status = inputState ? 'formInput' : (tempWhitelist ? 'tempWhitelist' : 'normal');
        return status;
    }

    function reportState(state) {
        state = state || calculateState();
        chrome.runtime.sendMessage({ action: 'reportTabState', status: state });
    }

    function suspendTab(suspendedUrl) {

        reportState('suspended');

        if (suspendedUrl.indexOf('suspended.html') > 0) {
            window.location.replace(suspendedUrl);
        } else {
            window.location.href = suspendedUrl;
        }
    }

    function setCookieValue(key, value) {
        document.cookie = key + '=' + value;
    }

    function getCookieValue(key) {

        var keyStart = document.cookie.indexOf(key + '='),
            keyEnd,
            value = false;

        if (keyStart >= 0) {
            keyEnd = document.cookie.indexOf(';', keyStart) > 0 ? document.cookie.indexOf(';', keyStart) : document.cookie.length;
            value = document.cookie.substring(keyStart + key.length + 1, keyEnd);
            value = value.length > 0 ? value : false;
        }
        return value;
    }

    function handlePreviewError(suspendedUrl, err) {
        chrome.runtime.sendMessage({
            action: 'savePreviewData',
            previewUrl: false,
            errorMsg: err
        });
        suspendTab(suspendedUrl);
    }

    function generatePreviewImg(suspendedUrl, screenCapture) {
        var elementCount = document.getElementsByTagName('*').length,
            processing = true,
            timer = new Date(),
            height = 0;

        setCookieValue('gsScrollPos-' + tabId, document.body.scrollTop);

        //safety check here. don't try to use html2canvas if the page has more than 10000 elements
        if (elementCount < 10000) {

            //allow max of 30 seconds to finish generating image
            window.setTimeout(function() {
                if (processing) {
                    processing = false;
                    handlePreviewError(suspendedUrl, '30sec timeout reached');
                }
            }, 30000);

            //check where we need to capture the whole screen
            if (screenCapture === '2') {
                height = Math.max(document.body.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.clientHeight,
                    document.documentElement.scrollHeight,
                    document.documentElement.offsetHeight);
                // cap the max height otherwise it fails to convert to a data url
                height = Math.min(height, 10000);
            } else {
                height = Math.min(document.body.offsetHeight, window.innerHeight);
            }

            html2canvas(document.body, {
                height: height,
                width: document.body.clientWidth,
                imageTimeout: 1000,
                onrendered: function(canvas) {
                    if (processing) {
                        processing = false;
                        timer = (new Date() - timer) / 1000;
                        console.log('canvas: ' + canvas);
                        var dataUrl = canvas.toDataURL('image/webp', 0.8);
                        console.log('dataUrl: ' + dataUrl);
                        chrome.runtime.sendMessage({
                            action: 'savePreviewData',
                            previewUrl: dataUrl,
                            timerMsg: timer
                        }, function() {
                            suspendTab(suspendedUrl);
                        });
                    }
                }
            });

        } else {
            handlePreviewError(suspendedUrl, 'element count > 5000');
        }
    }

    function setTimerJob(timeToSuspend) {

        //slightly randomise suspension timer to spread the cpu load when multiple tabs all suspend at once
        if (timeToSuspend > (1000 * 60)) {
            timeToSuspend = timeToSuspend + parseInt((Math.random() * 1000 * 60), 10);
        }

        //safety check to make sure timeToSuspend is reasonable
        if (timeToSuspend < (1000 * 10)) {
            timeToSuspend = (1000 * 60 * 60);
        }

        timerUp = new Date((new Date()).getTime() + timeToSuspend);

        return setTimeout(function() {
            //request suspension
            if (!inputState && !tempWhitelist) {

                chrome.runtime.sendMessage({ action: 'suspendTab' });
            }
        }, timeToSuspend);
    }

    function setFormInputJob() {
        window.addEventListener('keydown', function(event) {
            if (!inputState && !tempWhitelist) {
                if (event.keyCode >= 48 && event.keyCode <= 90 && event.target.tagName) {
                    if (event.target.tagName.toUpperCase() === 'INPUT' ||
                        event.target.tagName.toUpperCase() === 'TEXTAREA' ||
                        event.target.tagName.toUpperCase() === 'FORM') {
                        inputState = true;
                    }
                }
            }
        });
    }

    function requestPreferences(callback) {
        chrome.runtime.sendMessage({ action: 'prefs' }, function(response) {
            callback(response);
        });
    }




}());