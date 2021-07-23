// классы добавлять на элементы (вдруг адаптив, а ты с классом на блоке)
// _anim-no-hide - анимаци проигрывается один раз
// _anim-items   - стандарт
// _active служит для стилизации

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
				let counters = document.querySelectorAll('.nn._active > .counter');

				counters.forEach((counter) => {
					counter.innerText = '0';

					let updateCounter = () => {
						let target = +counter.getAttribute('data-target');
						console.log(typeof target, target)
						let c = +counter.innerText;

						let increment = target / 900;

						if (c < target) {
							counter.innerText = `${Math.ceil(c + increment)}`;
							setTimeout(updateCounter, 1);
						} else {
							counter.innerText = target;
						}
					};
					updateCounter();
				});
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	// задержка перед началом анимации
	setTimeout(() => {
		animOnScroll();
	}, 300);
}





let counters = document.querySelectorAll('.nn._active > .counter');

counters.forEach((counter) => {
	counter.innerText = '0';

	let updateCounter = () => {
		let target = +counter.getAttribute('data-target');
		console.log(typeof target, target)
		let c = +counter.innerText;

		let increment = target / 900;

		if (c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter();
});