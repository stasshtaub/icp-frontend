{
	new Swiper(".festival-story__slider", {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: ".festival-story__dots",
			bulletClass: "slider__dots-item",
			bulletActiveClass: "slider__dots-item--active",
			renderBullet: (_, className) =>
				`<li class="${ className }"><div class="slider__dot slider__dot--blue"></div></li>`,
			clickable: true
		}		
	});
}
