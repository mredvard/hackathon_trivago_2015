$(function () {
<<<<<<< HEAD
    $('#datetimepicker1').datetimepicker();
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
=======
    $('#datetimepicker1').datetimepicker({
    	format: 'YYYY-MM-DD',
    	widgetPositioning: {
    	    horizontal: 'auto',
	        vertical: 'bottom'
    	}
    });
>>>>>>> 8bb48d6c643d46f3798c6b7dcf55c9ea04b70904
});