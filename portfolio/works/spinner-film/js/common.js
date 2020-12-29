$(document).scroll(function () {
	if($(document).scrollTop() > $('.page-header').height())
		 $('.page-nav').addClass('page-nav--fix');
	else
		$('.page-nav').removeClass('page-nav--fix');
})

var $page1 = $('html, body');
$('.page-nav__item a[href*="#"]').click(function() {
    $page1.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
