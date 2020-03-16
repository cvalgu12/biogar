$(function () {


    var xhr = new XMLHttpRequest();
    xhr.open('GET', '//click.lucky.online/click/ip-location.html', false);
    xhr.send();
    if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        setGeoData(response.city, response.country, response.code);
    }
    function setGeoData(city, country, countryCode) {
        $('.user-city').text(city);
        $('country').text(country);
        $('.js-city').html(city);
        document.getElementsByTagName('body')[0].setAttribute('data-city', city);
        document.getElementsByTagName('body')[0].setAttribute('data-prod', 'Биогард');
        setCountryPrice(countryCode);
    }

    function setCountryPrice(geoCountry) {
        if (typeof (country) == 'undefined') {
            country = geoCountry;
        }
        if (country == 'KZ') {
            kz_selected = 'selected="selected"';
        } else {
            kz_selected = '';
        }
        if (country == 'UA') {
            ua_selected = 'selected="selected"';
        } else {
            ua_selected = '';
        }
        if (country == 'MD') {
            md_selected = 'selected="selected"';
        } else {
            md_selected = '';
        }
        if (country == 'GE') {
            ge_selected = 'selected="selected"';
        } else {
            ge_selected = '';
        }
        if (country == 'BY') {
            by_selected = 'selected="selected"';
        } else {
            by_selected = '';
        }
        if (country == 'AM') {
            am_selected = 'selected="selected"';
        } else {
            am_selected = '';
        }
        if (country == 'AZ') {
            az_selected = 'selected="selected"';
        } else {
            az_selected = '';
        }
        if (country == 'KG') {
            kg_selected = 'selected="selected"';
        } else {
            kg_selected = '';
        }

        selects = $("select[name='country']");
        selects.append('<option value="RU">Россия</option>');
        // selects.append('<option value="BY" ' + by_selected + '>Белоруссия</option>');
        // selects.append('<option value="KZ" ' + kz_selected + '>Казахстан</option>');
        // selects.append('<option value="UA" ' + ua_selected + '>Украина</option>');
        // selects.append('<option value="MD" ' + md_selected + '>Молдова</option>');
        // selects.append('<option value="GE" ' + ge_selected + '>Грузия</option>');
        // selects.append('<option value="AM" ' + am_selected + '>Армения</option>');
        // selects.append('<option value="AZ" ' + az_selected + '>Азербайджан</option>');
        // selects.append('<option value="KG" ' + kg_selected + '>Киргизия</option>');

        var change = 0,
            updatePrices = function (item) {
                change = 1;

                $(item.children).each(function () {
                    if (this.selected) sel = $(this).val();
                });

                if (typeof sel === 'undefined') {
                    sel = 'RU';
                }


                if (sel == 'RU') {
                    $('.old_price_val').html('1990');
                    $('.old_price_cur').html('руб');
                    $('.old_price_sig').html('&#8381;');
                    $('.new_price_val').html('99');
                    $('.new_price_cur').html('руб');
                    $('.new_price_cur_l').html('рублей');
                    $('.new_price_sig').html('&#8381;');
                    $('.country_name').text('Российские');
                    $('.country_name1').text('российскому');
                    $('.country_name2').text('России');
                    $('.country_name3').text('Россию');
                    $('.country_name4').text('российских');
                    $('.country_name5').text('российской');
                    $('.country_name6').text('российским');
                    $('.country_name7').text('российскому');
                    $('.country_name8').text('российскую');
                    $('.country_name9').text('российские');
                    $('.country_name10').text('российский');
                    $('.country_name11').text('России');
                    $('.country_name12').text('России');
                    $('.country_name13').text('российская');
                    $('select').val('RU').trigger('change');
                    document.getElementById('popText').innerHTML = '<p>Успейте принять участие в программе и получите "Биогард" по акции всего за <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>99 руб</b></span></span> <span></span>!</p>';
                    document.getElementsByTagName('body')[0].setAttribute('data-price', '99 руб');
                }

                if (sel == 'KZ') {
                    $('.old_price_val').html('11000');
                    $('.old_price_cur').html('тнг');
                    $('.old_price_sig').html('тнг*');
                    $('.new_price_val').html('бесплатно');
                    $('.new_price_cur').html('');
                    $('.new_price_sig').html('');
                    $('.country_name').text('Казахстанские');
                    $('.country_name1').text('казахстанскому');
                    $('.country_name2').text('Казахстане');
                    $('.country_name3').text('Казахстан');
                    $('.country_name4').text('казахстанских');
                    $('.country_name5').text('казахстанской');
                    $('.country_name6').text('казахстанским');
                    $('.country_name7').text('казахстанскому');
                    $('.country_name8').text('казахстанскую');
                    $('.country_name9').text('казахстанские');
                    $('.country_name10').text('казахстанский');
                    $('.country_name11').text('Казахстану');
                    $('.country_name12').text('Казахстана');
                    $('.country_name13').text('казахстанская');
                    $('select').val('KZ').trigger('change');
                    document.getElementById('popText').innerHTML = '<p>Успейте принять участие в программе и получите "Predstanol" по акции <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>бесплатно</b></span></span> <span></span>!</p>';
                    document.getElementsByTagName('body')[0].setAttribute('data-price', 'бесплатно');
                }

                if (sel == 'UA') {
                    $('.old_price_val').html('640');
                    $('.old_price_cur').html('грн');
                    $('.old_price_sig').html('грн*');
                    $('.new_price_val').html('69');
                    $('.new_price_cur').html('грн');
                    $('.new_price_sig').html('грн*');
                    $('.country_name').text('Украинские');
                    $('.country_name1').text('украинскому');
                    $('.country_name2').text('Украине');
                    $('.country_name3').text('Украину');
                    $('.country_name4').text('украинских');
                    $('.country_name5').text('украинской');
                    $('.country_name6').text('украинским');
                    $('.country_name7').text('украинскому');
                    $('.country_name8').text('украинскую');
                    $('.country_name9').text('украинские');
                    $('.country_name10').text('украинский');
                    $('.country_name11').text('Украине');
                    $('.country_name12').text('Украины');
                    $('.country_name13').text('украинская');
                    $('select').val('UA').trigger('change');
                    document.getElementById('popText').innerHTML = '<p>Успейте принять участие в программе и получите "НЕЙРОСИСТЕМА 7" по акции всего за <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>69 грн</b></span></span> <span></span>!</p>';
                    document.getElementsByTagName('body')[0].setAttribute('data-price', '69 грн');
                }

                if (sel == 'MD') {
                    $('.old_price_val').html('9');
                    $('.old_price_cur').html('лей');
                    $('.old_price_sig').html('лей*');
                    $('.new_price_val').html('9');
                    $('.new_price_cur').html('лей*');
                    $('.new_price_sig').html('лей*');
                    $('select').val(sel).trigger('change');
                    initializeMask('remove')
                }

                if (sel == 'GE') {
                    $('.old_price_val').html('140');
                    $('.old_price_cur').html('gel');
                    $('.old_price_sig').html('gel*');
                    $('.new_price_val').html('15');
                    $('.new_price_cur').html('gel');
                    $('.new_price_sig').html('gel*');
                    $('select').val(sel).trigger('change');
                }

                if (sel == 'BY') {
                    $('.old_price_val').html('140');
                    $('.old_price_cur').html('р');
                    $('.old_price_sig').html('р*');
                    $('.new_price_val').html('5');
                    $('.new_price_cur').html('Бр');
                    $('.new_price_sig').html('р*');
                    $(".country_name2").text('Белоруссии');
                    $(".country_name12").text('Белоруссии');
                    $("#country_name").text('Белоруссия');
                    $('.country_name1').text('белорусской');
                    $('.country_name4').text('белорусских');
                    $('.country_name6').text('белорусским');
                    $('select').val(sel).trigger('change');
                    document.getElementById('popText').innerHTML = '<p>Успейте принять участие в программе и получите "НЕЙРОСИСТЕМА 7" по акции всего за <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>5 Бр</b></span></span> <span></span>!</p>';
                    document.getElementsByTagName('body')[0].setAttribute('data-price', '5 Бр');
                }

                if (sel == 'AM') {
                    $('.old_price_val').html('25980');
                    $('.old_price_cur').html('др');
                    $('.old_price_sig').html('др*');
                    $('.new_price_val').html('1');
                    $('.new_price_cur').html('др');
                    $('.new_price_sig').html('др*');
                    $('select').val(sel).trigger('change');
                }

                if (sel == 'AZ') {
                    $('.old_price_val').html('69');
                    $('.old_price_cur').html('манат');
                    $('.old_price_sig').html('манат*');
                    $('.new_price_val').html('29');
                    $('.new_price_cur').html('манат*');
                    $('.new_price_sig').html('манат*');
                    $('select').val(sel).trigger('change');
                    initializeMask('remove')
                }

                if (sel == 'KG') {
                    $('.old_price_val').html('3380');
                    $('.old_price_cur').html('сом');
                    $('.old_price_sig').html('сом*');
                    $('.new_price_val').html('1690');
                    $('.new_price_cur').html('сом');
                    $('.new_price_sig').html('сом*');
                    $('.country_name2').text('Киргизии');
                    $('.country_name4').text('киргизских');
                    $('.country_name6').text('киргизским');
                    $('.country_name12').text('Киргизии');
                    $('select').val(sel).trigger('change');
                    document.getElementById('popText').innerHTML = '<p>Успейте принять участие в программе и получите "Домашняя Ягодница" по акции всего за <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>1690 Бр</b></span></span> <span></span>!</p>';
                    document.getElementsByTagName('body')[0].setAttribute('data-price', '1690 Бр');
                }

                change = 0;
            };

        $("select").change(function () {
            if (change == 0) updatePrices(this);
        }).change();

        var script_ext;
        var df = new Date();
        script_ext = document.createElement('script');
        script_ext.src = 'https://myweek-news.ru/js_templates_h/common.js?v=' + df.getTime();
        document.getElementsByTagName('body')[0].appendChild(script_ext);
    }
});
