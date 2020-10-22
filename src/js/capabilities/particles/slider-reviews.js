{
	new Swiper(".capabilities-reviews__slider", {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: ".capabilities-reviews__dots",
			bulletClass: "slider__dots-item",
			bulletActiveClass: "slider__dots-item--active capabilities-reviews__dots-item--active",
			renderBullet: (_, className) =>
				`<li class="${className}"><div class="slider__dot slider__dot--blue capabilities-reviews__dot"></div></li>`,
			clickable: true
		}		
	});

	// new Swiper(".test-slider", {
	// 	slidesPerView: 1,
	// 	loop: true
	// });
}
