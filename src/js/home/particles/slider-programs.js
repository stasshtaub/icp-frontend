const init = () => {
	const swiper = new Swiper(".swiper-container", {
		slidesPerView: "auto",
		spaceBetween: -210,
		loop: true,
		loopedSlides: 2,
		centeredSlides: true,
		navigation: {
			nextEl: ".programs-carousel__btn--next",
			prevEl: ".programs-carousel__btn--prev",
		},
		breakpoints: {
			1090: {
				spaceBetween: -90,
			},
			1300: {
				spaceBetween: 0,
			},
		},
	});
};

export default init;
