{
	const totalSlidesView = document.querySelector(".strengths__counter-total");
	const curSlideView = document.querySelector(".strengths__counter-curr");

	const updateCounter = ({ realIndex }) => {
		curSlideView.textContent = realIndex + 1;
	};

	const swiper = new Swiper(".strengths__slider", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".strengths__btn--next",
			prevEl: ".strengths__btn--prev",
		},
		pagination: {
			el: ".strengths__dots",
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
