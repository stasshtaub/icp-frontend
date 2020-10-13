{
	new Swiper(".programs-carousel__slider", {
		slidesPerView: 1,
		loop: true,
		speed: 600,
		centeredSlides: true,


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
			// when window width is >= 426px
			426: {
				slidesPerView: 2,
				loopedSlides: 2,
			},
			// when window width is >= 769px
			769: {
				slidesPerView: 3,
			}
		}
	});
}
