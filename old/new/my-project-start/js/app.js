quantity();
function quantity() {
	document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
	let valueCount;
	let price = document.getElementById("price").innerText;
	function priceTotal() {
		let total = valueCount * price;
		document.getElementById("price").innerText = total
	}
	document.querySelector(".plus-btn").addEventListener("click", function () {
		valueCount = document.getElementById("quantity").value;
		valueCount++;
		document.getElementById("quantity").value = valueCount;
		if (valueCount > 1) {
			document.querySelector(".minus-btn").removeAttribute("disabled");
			document.querySelector(".minus-btn").classList.remove("disabled")
		}
		priceTotal()
	})
	document.querySelector(".minus-btn").addEventListener("click", function () {
		valueCount = document.getElementById("quantity").value;
		valueCount--;
		document.getElementById("quantity").value = valueCount;
		if (valueCount == 1) {
			document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
		}
		priceTotal()
	})
}

let myImageSlider = new Swiper('.slider', {
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		// - Буллеты (один из типов)
		type: 'bullets',
		clickable: true,
		},
	
	renderFraction: function (currentClass, totalClass) {
		return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
	},
	thumbs: {
		swiper: {
			el: '.slider-thumb',
			slidesPerView: 2.5,
		}
	},

	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.slider-thumb'
	},

	freeMode: true,
});


let total = document.querySelector('.slider__total');
let current = document.querySelector('.slider__current');

total.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function() {
	let currentSlide = ++myImageSlider.realIndex;
	current.innerHTML = currentSlide;
})

