// Проверка, загрузилась ли страница
$(document).ready(function () {

	$('.link-popup').click(function () {
		$('#' + $(this).data('link')).addClass('open');
		console.log($(this).data('link'))
	});

	$('.popup__btn-back').click(function () {
		$('.popup').removeClass('open');
	});

	$(document).on('click', '.class-link', function () {
		var linkID = $(this).attr('data-link');
		$('html, body').animate({
			scrollTop: $(linkID).offset().top
		}, 'slow');
	});

});