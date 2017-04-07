$(function(){
    var headerSelector = '[data-sticky-head]',
        headContainer = '[data-header-menu]';


    var $headerSelector = $(headerSelector),
        $window = $(window),
        $headContainer = $(headContainer);

    $(document).scroll(function () {
        var offsetTop = $headerSelector.offset().top,
            scrollTop = $window.scrollTop();

        if(offsetTop <= scrollTop) {
            console.log('offset');
            $headContainer.addClass('sticky');
        } else {
            $headContainer.removeClass('sticky');
        }
    })
});
