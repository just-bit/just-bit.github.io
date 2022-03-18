var modalAdd = document.querySelector('.modal-add');
var modalAddOpen = document.querySelectorAll('.goods__item-buy button:first-child');
var modalAddClose = document.querySelector('.modal-add__btn-close');

var modalForm = document.querySelector('.modal-form');
var modalFormOpen = document.querySelector('.location__help');
var modalFormClose = document.querySelector('.modal-form__btn-close');
var modalFormName = document.querySelector('.modal-form [name=name]');
var modalFormEmail = document.querySelector('.modal-form [name=email]');
var modalFormForm = document.querySelector('.modal-form__form');
var storage = localStorage.getItem('modalFormName');
var isStorageSupport = true;
var storage = '';	

var modalMap = document.querySelector('.modal-map');
var modalMapOpen = document.querySelector('.location__map');
var modalMapClose = document.querySelector('.modal-map__btn-close');

// Add

for (var i = 0; i < modalAddOpen.length; i++) {
	modalAddOpen[i].addEventListener('click', function (evt) {
	evt.preventDefault();
	modalAdd.classList.add('modal-add-show');
})}

modalAddClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalAdd.classList.remove('modal-add-show');
})

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (modalAdd.classList.contains('modal-add-show')) {
			evt.preventDefault();
			modalAdd.classList.remove('modal-add-show');
		}
	}
})

// Form

if (modalFormOpen) {
	modalFormOpen.addEventListener ('click', function (evt) {
	evt.preventDefault();
	modalForm.classList.add('modal-form-show');
	modalFormName.focus();
	if (storage) {
		modalFormName.value = storage;
		modalFormEmail.focus();
	} else {
		modalFormName.focus();
	}
})
}

try {
	storage = localStorage.getItem('modalFormName');
} catch (err) {
	isStorageSupport = false;
}

if (modalFormClose) {
	modalFormClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalForm.classList.remove('modal-form-show');
	modalForm.classList.remove('submit-error');
})
}

if (modalFormForm) {
	modalFormForm.addEventListener('submit', function (evt) {
	if (!modalFormName.value || !modalFormEmail.value) {
	evt.preventDefault();
	modalForm.classList.add('submit-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('modalFormName', modalFormName.value);
		}
	}
})
}

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (modalForm.classList.contains('modal-form-show')) {
			evt.preventDefault();
			modalForm.classList.remove('modal-form-show');
		}
	}
})

// Map

if (modalMapOpen) {
	modalMapOpen.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalMap.classList.add('modal-map-show');
})
}

if (modalMapClose) {
	modalMapClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalMap.classList.remove('modal-map-show');
})
}

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (modalMap.classList.contains('modal-map-show')) {
			evt.preventDefault();
			modalMap.classList.remove('modal-map-show');
		}
	}
})