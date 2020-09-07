$(function() {

	$('.header__burger').on('click', function() {
		$('.header__burger').toggleClass('active')
		$('.header__body').toggleClass('active')
		$('body').toggleClass('lock')
	})



	$('.aside__title').on('click', function() {
		$(this).next('.aside__block').slideToggle()

	})


})
