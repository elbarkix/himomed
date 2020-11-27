// animation
jQuery(function($){
    $('.animation').viewportChecker();
});
// end animation
jQuery(function($){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
});
//header section menu
jQuery(function($){
    if ($(window).width() < 769) {
        $('.header-section .menu-link').on('click', function(){
            $(this).toggleClass('active');
            $('.header-section nav').slideToggle();
        });
        $('.header-section nav a').on('click', function(){
            $('.header-section nav').slideUp();
            $('.header-section .menu-link').removeClass('active');
        });
        $('input').on('focus', () => {
            $('.safe-buy').css('display','none');
        });
        $('input').on('blur', () => {
            $('.safe-buy').css('display','block');
        });
    }
});
//end header section menu

// popup
jQuery(function($){
    var OpenPopupLink = $('a.open-popup-link');
    var ClosePopupLink = $('a.close-popup-link');
    var PopupWrapper = $('.popup-wrapper');
    OpenPopupLink.click(function() {
        var clickId = this.id;
        $('#popup-' + clickId).fadeIn(300);
        PopupWrapper.fadeIn(300);
        $('body').css('overflow','hidden').css('height','100%');
    });
    ClosePopupLink.click(function() {
        $(this).parents('.popup').fadeOut(300);
        PopupWrapper.fadeOut(300);
        $('body').css('overflow','auto').css('height','auto');
    });
    $(document).keydown(function(eventObject) {
        if ($('[id^="popup-"]').is(":visible")){
            if (eventObject.which == '27') {
                $('[id^="popup-"]').fadeOut(300);
                PopupWrapper.fadeOut(300);
                $('body').css('overflow','auto').css('height','auto');
            }
        }
    });
    $(document).mouseup(function (e) {
        var container = $('[id^="popup-"]');
        if (container.has(e.target).length === 0){
            container.fadeOut(300);
            PopupWrapper.fadeOut(300);
            $('body').css('overflow','auto').css('height','auto');
        }
    });
});
// end popup


// third section info
jQuery(function($){
    $('.third-section main article.item-1 .more-button').on('click', function (){
        $('.third-section main .info').fadeOut(300);
        $('.third-section main .info.item-1').fadeIn(300);
    });
    $('.third-section main article.item-2 .more-button').on('click', function (){
        $('.third-section main .info').fadeOut(300);
        $('.third-section main .info.item-2').fadeIn(300);
    });
    $('.third-section main article.item-3 .more-button').on('click', function (){
        $('.third-section main .info').fadeOut(300);
        $('.third-section main .info.item-3').fadeIn(300);
    });
    $('.third-section main article.item-4 .more-button').on('click', function (){
        $('.third-section main .info').fadeOut(300);
        $('.third-section main .info.item-4').fadeIn(300);
    });
    $('.third-section main .info.item-1 .next-info-link').on('click', function (){
        $('.third-section main .info').fadeOut(300);
        $('.third-section main .info.item-2').fadeIn(300);
    });
    $('.third-section main .info.item-2 .next-info-link').on('click', function (){
        $('.third-section main .info').fadeOut(300);
        $('.third-section main .info.item-3').fadeIn(300);
    });
    $('.third-section main .info.item-3 .next-info-link').on('click', function (){
        $('.third-section main .info').fadeOut(300);
        $('.third-section main .info.item-4').fadeIn(300);
    });
    $('.third-section main .info .close-info-link').on('click', function (){
        $('.third-section main .info').fadeOut(300);
    });
});
// end third section info

// cvv image
jQuery(function (o) {
    o(".cvv-link").click(function () {
        o(this).siblings(".cvv-image").slideToggle()
    })
});
// end cvv image

// order sticker
jQuery(function($){
    $('.sticker-bottom').delay(4000).fadeIn(300);
    $('.sticker-bottom .close-sticker-link').on('click', function(){
        $('.sticker-bottom').fadeOut(300);
    });
});
// end order sticker

// end order bar
jQuery(function($){
    $('.order-bar').delay(2000).slideDown(300);
});
// end order bar

//placeholder ie
$(document).ready(function() {
    /* Placeholder for IE */
    if($.browser.msie) { // Ð£ÑÐ»Ð¾Ð²Ð¸Ðµ Ð´Ð»Ñ Ð²Ñ‹Ð·Ð¾Ð²Ð° Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð² IE
        $("form").find("input[type='text']").each(function() {
            var tp = $(this).attr("placeholder");
            $(this).attr('value',tp).css('color','#A9A9A9');
        }).focusin(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == val) {
                $(this).attr('value','').css('color','#747b80');
            }
        }).focusout(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == "") {
                $(this).attr('value', val).css('color','#A9A9A9');
            }
        });
        /* Protected send form */
        $("form").submit(function() {
            $(this).find("input[type='text']").each(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == val) {
                    $(this).attr('value','');
                }
            })
        });
    }
});
//end placeholder ie

//pie ie fix
$(function() {
    if (window.PIE) {
        $('.iefix, .owl-pagination .owl-page, .popup-inner, .order-form, button, .product-block, .order-arrow, .order-counter, .order-delivery, .order-satisfaction, .order-special, .order-satisfaction, .order-gift, .sticker-bottom, .six-section main .button, .fourth-section .button, .third-section .button, .header-section, .header-section nav .button, .third-section main .info').each(function() {
            PIE.attach(this);
        });
    }
});
//end pie ie fix
// scroll
// jQuery(function($){
//     var sections = $('.section'), nav = $('.header-section nav ul');
//     $(window).on('scroll', function () {
//         var cur_pos = $(this).scrollTop();
//         sections.each(function() {
//             var top = $(this).offset().top - 80, bottom = top + $(this).outerHeight();
//             if (cur_pos >= top && cur_pos <= bottom) {
//                 nav.find('a').removeClass('active');
//                 nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//             }
//         });
//     });
//     nav.find('.scroll-link').on('click', function () {
//         var $el = $(this)
//             , id = $el.attr('href');
//         $('html, body').animate({
//             scrollTop: $(id).offset().top - 80
//         }, 500);
//         return false;
//     });
//     $('.scroll-link-button').on('click', function () {
//         var $el = $(this)
//             , id = $el.attr('href');
//         $('html, body').animate({
//             scrollTop: $(id).offset().top
//         }, 500);
//         $('input.first-name').focus();
//         return false;
//     });
// });
// end scroll

//send logging data
function logging(form) {
    $.ajax({
        type: 'POST',
        url: basic_url + 'logging/',
        data: {input : form.serialize(), log_s: 1},
        dataType: 'json'
    });
}
//end send logging data

//send contact us
function send_contact_us(form, language_code) {
    $.ajax({
        type: 'POST',
        url: basic_url + 'contact_us_handler/',
        data: {input : form.serialize(), language: language_code},
        dataType: 'json'
    });
}
//end send contact us
jQuery(function($){
    var mydate = new Date();
    var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $('.date-container').text(" " + montharray[mydate.getMonth()] + " "
        + mydate.getDate() + ", " + mydate.getFullYear() );
});