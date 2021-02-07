{
	const container = document.querySelector(
		".education-online__slider .swiper-container"
	);

	const thumbsContainer = document.querySelector(
		".education-online__thumbs .swiper-container"
	);

	const commonOptions = {
		spaceBetween: 30,
		slidesPerView: 1,
	};

	const thumbsSwiper = new Swiper(thumbsContainer, {
		...commonOptions,
	});

	new Swiper(container, {
		...commonOptions,
		// navigation: {
		//     prevEl,
		//     nextEl
		// },
		mousewheel: {
			forceToAxis: true,
			invert: true,
			sensitivity: 0.7,
		},

		thumbs: {
			swiper: thumbsSwiper,
		}
	});
}
