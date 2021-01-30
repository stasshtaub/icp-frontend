const sliders = document.querySelectorAll(".news-detail2-slider__container");

sliders.forEach((slider) => {
    swiper = new Swiper(slider, {
        navigation: {
          nextEl: '.slider__btn--next',
          prevEl: '.slider__btn--prev',
        },
        pagination: {
            el: ".news-detail2-slider__dots",
            bulletClass: "slider__dots-item news-detail2-slider__dots-item",
            bulletActiveClass: "active",
            renderBullet: (_, className) =>
                `<li class="${className}"><div class="slider__dot"></div></li>`,
            clickable: true
        },
        mousewheel: {
            forceToAxis: true,
            invert: true,
            sensitivity: 0.7
        }
    });
})
