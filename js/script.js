$(document).ready(function () {
	var touch = $(".mobile-btn");
	var toggles = document.querySelectorAll(".mobile-menu");

	function toggleHandler(toggle) {
		toggle.addEventListener("click", function (e) {
			e.preventDefault();
			this.classList.contains("active") === true
				? this.classList.remove("active")
				: this.classList.add("active");
		});
	}

	touch.on("click", function (e) {
		touch.toggleClass('active');
	});

	$(touch).click(function (e) {
		e.preventDefault();
		$("body").toggleClass("menu-opened");
		return false;
	});

	$(".acc-body").css("display", "none");
	$(".acc-head").click(function () {
		$(this).toggleClass("active").next().slideToggle();
		$(".acc-head").not(this).removeClass("active").next().slideUp();
	});

});


