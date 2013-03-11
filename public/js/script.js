$(document).ready(function () {
	/* Bootstrap Scrollspy */
	$('nav').localScroll({
		duration: 350
	});

	$('body').scrollspy({
		offset: 40
	});

	/* Parallax Effect */
	var parallaxFactor = 0.5;
	var musicOffset = $('.music').offset().top;

	$('.music').css('background-position', '0px ' + musicOffset * parallaxFactor + 'px');

	$(window).scroll(function (e) {
		var offset = -1 * $(window).scrollTop();
		
		$('.about').css('background-position', '0px ' + offset * parallaxFactor + 'px');
		$('.music').css('background-position', '0px ' + (offset + musicOffset) * parallaxFactor + 'px');
	});
});