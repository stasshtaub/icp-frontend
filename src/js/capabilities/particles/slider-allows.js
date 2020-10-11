{
	const totalSlidesView = document.querySelector(".capabilities-allows__counter-total");
	const curSlideView = document.querySelector(".capabilities-allows__counter-curr");

	const updateCounter = ({ realIndex }) => {
		curSlideView.textContent = realIndex + 1;
	};

	const swiper = new Swiper(".capabilities-allows__slider", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".capabilities-allows__btn--next",
			prevEl: ".capabilities-allows__btn--prev",
		},
		pagination: {
			el: ".capabilities-allows__dots",
			bulletClass: "slider__dot",
			bulletActiveClass: "slider__dot--active",
			clickable: true,
		},
		on: {
			init: (swiper) => {
				totalSlidesView.textContent = swiper.slides.length - 2;
			},
			slideChange: updateCounter,
		},
	});
}
