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
// owl slider
$(document).ready(function() {
    $('.carousel-testimonials').owlCarousel({
        items: 3,
        itemsDesktop: [1023,3],
        itemsTablet: [959,2],
        itemsMobile : [768,1],
        singleItem : false,
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: false,
        pagination: true,
        responsive: true,
        paginationNumbers: false,
        stopOnHover: true
    });
});
// end owl slider
