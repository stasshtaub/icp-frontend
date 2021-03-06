{
	new Swiper(".about-reviews__slider", {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: ".about-reviews__dots",
			bulletClass: "slider__dots-item",
			bulletActiveClass: "slider__dots-item--active about-reviews__dots-item--active",
			renderBullet: (_, className) =>
				`<li class="${className}"><div class="slider__dot slider__dot--blue about-reviews__dot"></div></li>`,
			clickable: true
		}		
	});
}
