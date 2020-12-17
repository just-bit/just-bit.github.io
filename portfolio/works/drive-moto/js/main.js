$(function () {

	$('.slider-banner').slick({
		dots: true,
		autoplay: true
	});

	$('.slider-products').slick({
		dots: false,
		autoplay: false,
		infinite: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					arrows: false,
					dots: true
				}
			},

			{
				breakpoint: 980,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true
				}
			},

			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});


	$('.tab-item').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab-item--active');
		$($(this).parent().siblings().find('.tab-content')).removeClass('tab-content--active');

		$(this).addClass('tab-item--active');
		$($(this).attr('href')).addClass('tab-content--active');

	});


	$('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--checked');
	});


	$('.filter-form__legend').on('click', function () {
		$(this).toggleClass('filter-form__legend--active');
		$(this).next().slideToggle('200');
	});



	$('.footer__info-title').on('click', function () {
		$(this).toggleClass('footer__info-title--active');
		$(this).next().slideToggle('200');
	});




	var $range = $(".js-range-slider"),
		$inputFrom = $(".js-input-from"),
		$inputTo = $(".js-input-to"),
		instance,
		min = 0,
		max = 1000000,
		from = 100000,
		to = 500000;

	$range.ionRangeSlider({
		type: "double",
		grid: true,
		min: min,
		max: max,
		from: 200,
		to: 800,
		onStart: updateInputs,
		onChange: updateInputs
	});

	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});
	});

	$inputTo.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});
	});

	$('.filter-top__swich-grid').on('click', function () {
		$(this).addClass('filter-top__swich-button--active');
		$('.filter-top__swich-line').removeClass('filter-top__swich-button--active');
		$('.product-item').removeClass('product-item-line');
	})

	$('.filter-top__swich-line').on('click', function () {
		$(this).addClass('filter-top__swich-button--active');
		$('.filter-top__swich-grid').removeClass('filter-top__swich-button--active');
		$('.product-item').addClass('product-item-line');
	})


	$('select').styler();

	$(".rate-yo").rateYo({
		starWidth: "22px",
		spacing: "7px",
		normalFill: "#C4C4C4",
		ratedFill: "#1C62CD"

	});
});

let btn = document.querySelector('.button-burger');
let icon = document.querySelector('.button-burger__icon');

btn.addEventListener('click', function () {
	icon.classList.toggle('button-burger__icon--active');
})

// если js умрет, моб. меню останется в потоке
let menuMobile = document.querySelector('.menu__mobile');
menuMobile.classList.add('menu__mobile-js');

// тогл кнопка меню
let buttonBurger = document.querySelector('.button-burger');

buttonBurger.addEventListener('click', function () {
	if (!menuMobile.classList.contains('menu__mobile-visible-js')) {
		menuMobile.classList.add('menu__mobile-visible-js');
		buttonBurger.classList.add('button-burger-js');
	} else {
		menuMobile.classList.remove('menu__mobile-visible-js');
		buttonBurger.classList.remove('button-burger-js');
	}
});

// еpresence  filter-box

let btnFilter = document.querySelector('.filter-top__btn-filter');
let btnSubmit = document.querySelector('.filter-form__submit');
let filterAside = document.querySelector('.filter-aside');


btnFilter.addEventListener('click', function () {
	filterAside.classList.toggle('filter-aside--show');
});

btnSubmit.addEventListener('click', function (e) {
	filterAside.classList.remove('filter-aside--show');
});