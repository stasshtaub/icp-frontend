{
	const container = document.querySelector(".capabilities-leading__content");
	const wrapper = document.querySelector(".capabilities-leading__persons");
	const slides = document.querySelectorAll(".capabilities-leading__person");

	const breakpointMobileL = window.matchMedia(
		"screen and (max-width: 768px)"
	);

	let swiper;

	const breakpointChecker = () => {
		if (breakpointMobileL.matches) {
			console.log("init capabilities-leading");
			initSwiper();
		} else {
			if (swiper) {
				console.log("destroy capabilities-leading");
				destroySwiper();
			}
		}
	};

	const initSwiper = () => {
		container.classList.add("swiper-container");
		wrapper.classList.add("swiper-wrapper");
		slides.forEach((slide) => {
			slide.classList.add("swiper-slide");
		});

		swiper = new Swiper(".capabilities-leading__content", {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".capabilities-leading__dots",
				bulletClass: "slider__dots-item",
				bulletActiveClass: "slider__dots-item--active capabilities-leading__dots-item--active",
				renderBullet: (_, className) =>
					`<li class="${className}"><div class="slider__dot capabilities-leading__dot"></div></li>`,
				clickable: true
			},
			navigation: {
				nextEl: ".capabilities-leading__buttons > .slider__btn--next",
				prevEl: ".capabilities-leading__buttons > .slider__btn--prev",
			}
		});
	};

	const destroySwiper = () => {
		container.classList.remove("swiper-container");
		wrapper.classList.remove("swiper-wrapper");
		slides.forEach((slide) => {
			slide.classList.remove("swiper-slide");
		});

		swiper.destroy(true, true);
	};

	try {
		breakpointMobileL.addEventListener("change", breakpointChecker);
	} catch (e1) {
		try {
			breakpointMobileL.addListener(breakpointChecker);
		} catch (e2) {
			console.error(e2);
		}
	}

	breakpointChecker();
}
