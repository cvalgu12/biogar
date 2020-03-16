$(document).ready(function() {

    $('.popup-close').click(function() {
        $('.popup').css('display', 'none');
    });

});

$(document).ready(function() {



    $('.cta_btn').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({ scrollTop: $('#lv-formLanding1').offset().top }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.ollia1').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({ scrollTop: $('.advantages').offset().top }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.ollia2').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({ scrollTop: $('.comments-section').offset().top }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.ollia3').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({ scrollTop: $('.info-section').offset().top }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });

    $(".tel").keypress(function(e) {
        var phone = $(this).val();
        var value_str5 = phone.substr(0, 5);
        //alert(value_str5) ;	
        if (value_str5 == '+7(89') {
            //$(this).css({'border':'1px solid red','color':'red'});
            $(this).val('+7(9');

        }
    });


    $('.nevidi').hover(function() {

        $('.js-popup-link').click();

    });
    // var overlay = $('#overlay');
    // $('.nevidi').hover(function(){
    //  alert(22) ;
    //   overlay.fadeIn(400,
    // 	   function(){
    // 		  $('#modal2').css('display', 'flex').animate({opacity: 1}, 200);
    //    });
    // },function(){

    // })


});