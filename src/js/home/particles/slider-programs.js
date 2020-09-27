const init = () => {
	const swiper = new Swiper(".swiper-container", {
		slidesPerView: "auto",
		loop: true,
		loopedSlides: 2,
		centeredSlides: true,
		navigation: {
			nextEl: ".programs-carousel__btn--next",
			prevEl: ".programs-carousel__btn--prev",
		},
		pagination: {
			el: ".programs-carousel__dots",
			bulletClass: "programs-carousel__dot",
			clickable: true,
		},
	});
};

export default init;
