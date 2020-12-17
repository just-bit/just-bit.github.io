$(document).ready(function () {
	$('.glob-sect__title').click(function () {
		$(this).parent().children('.glob-sect__inner').toggle('normal');
		return false;
	});
});
