function autoScrollTo(sel,offset,fn) {
	offset = offset || 0;
    var top = $(sel).offset().top + offset;
    $("html, body").animate({ scrollTop: top }, 1000, fn);
}

$(function () {
    $('#datetimepicker1').datetimepicker({
    	format: 'YYYY-MM-DD',
    	widgetPositioning: {
    	    horizontal: 'auto',
	        vertical: 'bottom'
    	}
    });
    $("#slider").noUiSlider({
        start: [1, 200],
        connect: true,
        range: {
            'min': 1,
            'max': 1000
        },
        step: 1
    });
    $('#slider').Link('upper').to($('#slider-value-upper'));
    $('#slider').Link('lower').to($('#slider-value-lower'));
    $('#datetimepicker1').datetimepicker({
    	format: 'YYYY-MM-DD',
    	widgetPositioning: {
    	    horizontal: 'auto',
	        vertical: 'bottom'
    	}
    });
    $('.home-search-submit').click(function(e){
    	e.preventDefault();
    	$('.home-search-form').submit();
    });
    $('.home-search-form').submit(function(e){
    	e.preventDefault();
    	$('.wm-big-header__image').animate({ height: 0 }, 600);
    	$('.js-results').animate({ opacity: 1 }, 400);
    	$('.wm-search-wrapper').animate({ padding: 0 }, 400);
    	$('.navbar').fadeIn();
    	$('.logo__container').animate({ height: 0 }, 600);
    	// autoScrollTo('.wm-search-small-wrapper',-75,function(){
    	// 	//$('.logo__container').hide();
    	// });
    })


    $('.form-item__add__link').click(function(){
    	var $formItem = $(this).closest('.form-row--hidden');
    	console.log($formItem);
    	$formItem.removeClass('form-row--hidden').next('.form-row--invisible').removeClass('form-row--invisible');
    });
});