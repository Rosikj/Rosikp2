$(function () {

	// $(window).scrollTop(0);

	$('.bar').hover(function () {
		$(this).find($('.text-white')).css({ 'color': 'white', 'cursor': 'default', "font-weight": "bold" });
	}, function () {
		$(this).find($('.text-white')).css({ 'color': ' rgb(223, 219, 219)', 'cursor': 'default', "font-weight": "normal" });
	})

});
