const init = () => {
	const swiper = new Swiper(".swiper-container", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".programs-carousel__btn--next",
			prevEl: ".programs-carousel__btn--prev",
		},
		pagination: {
			el: ".programs-carousel__dots",
			bulletClass: "programs-carousel__dot",
			clickable: true,
		},
		breakpoints: {
			700: {
				slidesPerView: "auto",
				centeredSlides: true,
				loopedSlides: 2,
			}
		}
	});
};

export default init;
