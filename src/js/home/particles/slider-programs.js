const init = () => {
	// const container = document.querySelector(".programs-carousel__slides");

	// const slider = tns({
	// 	container,
	// 	prevButton: ".programs-carousel__btn--prev",
	// 	nextButton: ".programs-carousel__btn--next",
	// 	navContainer: ".programs-carousel__dots",
	// 	items: 3,
	// 	center: true,
	// 	fixedWidth: 690,
	// });

	const swiper = new Swiper(".programs-carousel__slider", {
		loop: true,
		loopedSlides: 2,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 30,
		pagination: {
			el: ".programs-carousel__dots",
			clickable: true,
		},
		navigation: {
			nextEl: ".programs-carousel__btn--next",
			prevEl: ".programs-carousel__btn--prev",
		},
	});
};

export default init;
