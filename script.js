$(function(){


	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			nav: true,
			navContainer: ".navigation",
			navText: "",
			loop: true,
			margin: 40,
			responsive: {
				0:{
					items: 1
				},
				950:{
					items: 2,
					nav: false
				},
				1200:{
					items: 3,
					dots: false
				}



			}
		});

		$('.menu li a').on('click', function(event){
			event.preventDefault();

			let href = $(this).attr('href');
			let headerHeight = $('.header').height();
			let offset = $(href).offset().top;

			$('body, html').animate({scrollTop: offset,}, 1000);
		});




	});

	$('.popup-container').hide();

	/*Всплывающее окно*/

	$('.btn-function').on('click', function(){
		$('.popup-container').fadeIn();
	});

	$('.popup-container').click(function (event) {

		if (event.target == this){$(this).hide();}

	});

	/*описание кнопки-gamburger и меню-слайдер*/

	$('.disp-menu').hide();

	$('.header__menu-gamburger').on('click', function(event){
		event.preventDefault;
		$(this).toggleClass('header__menu-gamburger-active');

		$('.disp-menu').slideToggle();
	});

	/*Летающие символы*/
	
	$('.scobs').addClass('scobs-active');
	$('.hesh').addClass('hesh-active');
	$('.div-small').addClass('div-small-active');
	$('.div-big').addClass('div-big-active');
	$('.slesh').addClass('slesh-active');
	
});


















