var body = document.getElementsByTagName('body')[0];
var modalForm = document.getElementsByClassName('modal_form')[0];
var modalThanks = document.getElementsByClassName('modal_thanks')[0];
var close = document.getElementsByClassName('close-form')[0];
var closeThanks = document.getElementsByClassName('close-thanks')[0];
var formBtn = document.getElementsByClassName('form_btn');
var mobileFooter = document.getElementsByClassName('mobide_footer')[0];
var headerCta = document.getElementsByClassName('header_cta')[0];
/*for(var i = 0; i <= formBtn.length - 1; i++) {
	formBtn[i].onclick = function(){
		body.classList.add('overlay')
		modalThanks.style.display = 'flex';
		modalForm.style.display = 'none';

	}
}*/
function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();
    var top = box.top + pageYOffset;
    if (top > 1500) {
        elem.classList.add('flex_it')
    }
    if (top < 1500) {
        elem.classList.add('flex_it')
    }
}


close.onclick = function() {
    body.classList.remove('overlay')
    modalForm.style.display = 'none';
}
closeThanks.onclick = function() {
    body.classList.remove('overlay');
    modalThanks.style.display = 'none';
}