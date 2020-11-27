{    
	const container = document.querySelector(".partners-partners__container");
	const wrapper = document.querySelector(".partners-partners__list");
	const slides = document.querySelectorAll(".partners-partners__item");

	const breakpointTabletXs = window.matchMedia(
		"screen and (max-width: 530px)"
	);

	let swiper;

	const breakpointChecker = () => {
		if (breakpointTabletXs.matches) {
			initSwiper();
		} else {
			if (swiper) {
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

		swiper = new Swiper(container, {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".partners-partners__dots",
				bulletClass: "slider__dots-item",
				bulletActiveClass: "slider__dots-item--active partners-partners__dots-item--active",
				renderBullet: (_, className) =>
					`<li class="${className}"><div class="slider__dot partners-partners__dot"></div></li>`,
				clickable: true
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
		breakpointTabletXs.addEventListener("change", breakpointChecker);
	} catch (e1) {
		try {
			breakpointTabletXs.addListener(breakpointChecker);
		} catch (e2) {
			console.error(e2);
		}
	}

	breakpointChecker();
}
