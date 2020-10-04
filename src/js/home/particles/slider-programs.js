{
	new Swiper(".programs-carousel__slider", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".programs-carousel__btn--next",
			prevEl: ".programs-carousel__btn--prev",
		},
		pagination: {
			el: ".programs-carousel__dots",
			bulletClass: "slider__dot",
			bulletActiveClass: "slider__dot--active",
			clickable: true,
		},
		breakpoints: {
			700: {
				slidesPerView: "auto",
				centeredSlides: true,
				loopedSlides: 2,
			},
		},
	});
}
