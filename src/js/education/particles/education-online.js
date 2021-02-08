import { shuffleElement } from "../../helpers/shuffleElement";

{
	const container = document.querySelector(
		".education-online__slider .swiper-container"
	);
	const thumbsContainer = document.querySelector(
		".education-online__thumbs .swiper-container"
	);
	const prevEl = document.querySelector(".education-online__btn--prev");
	const nextEl = document.querySelector(".education-online__btn--next");

	const commonOptions = {
		spaceBetween: 30,
		slidesPerView: 1
	};

	const thumbsSwiper = new Swiper(thumbsContainer, {
		...commonOptions,
		watchSlidesProgress: true,
	});
	const swiper = new Swiper(container, {
		...commonOptions,
		navigation: {
		    prevEl,
		    nextEl
		},
		mousewheel: {
			forceToAxis: true,
			invert: true,
			sensitivity: 0.7,
		}
	});

    swiper.controller.control = thumbsSwiper;
    thumbsSwiper.controller.control = swiper;


	// Перестановка блоков

	const title = document.querySelector(".education-online__title");
	const defaultContainer = document.querySelector(".education-online__col--right");
	const secondContainer = document.querySelector(".education-online__steps");

	const breakpointLaptop = window.matchMedia(
		"screen and (max-width: 1024px)"
	);

	
	const breakpointChecker = () => {
		if (breakpointLaptop.matches) {
			shuffleElement(title, secondContainer, "afterbegin")
		} else {
			shuffleElement(title, defaultContainer, "afterbegin")
		}
	};

	try {
		breakpointLaptop.addEventListener("change", breakpointChecker);
	} catch (e1) {
		try {
			breakpointLaptop.addListener(breakpointChecker);
		} catch (e2) {
			console.error(e2);
		}
	}

	breakpointChecker();
}
