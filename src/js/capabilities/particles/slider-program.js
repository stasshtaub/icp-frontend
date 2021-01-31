{
	new Swiper(".capabilities-program__slider", {
		slidesPerView: 'auto',
		autoHeight: true,
		navigation: {
			nextEl: ".capabilities-program__btn--next",
			prevEl: ".capabilities-program__btn--prev",
		},
		pagination: {
			el: ".capabilities-program__dots",
			bulletClass: "slider__dots-item",
			bulletActiveClass: "slider__dots-item--active capabilities-program__dots-item--active",
			renderBullet: (_, className) =>
				`<li class="${className}"><div class="slider__dot capabilities-program__dot"></div></li>`,
			clickable: true
		},
        mousewheel: {
            forceToAxis: true,
            invert: true,
            sensitivity: 0.7
		},
		breakpoints: {
			1075: {
				autoHeight: false
			}
		}
	});
}
