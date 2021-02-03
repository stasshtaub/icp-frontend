import { centerOnTarget } from "../../helpers/centerOnTarget";

const swiper = new Swiper(".loyalty-program-process__slider", {
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
    pagination: {
        el: ".loyalty-program-process__dots",
        bulletClass: "slider__dots-item loyalty-program-process__dots-item",
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

const dots = document.querySelector(".loyalty-program-process__dots")
const container = document.querySelector(".loyalty-program-process__body")

const centerDots = () => {
    const img = document.getElementsByClassName("loyalty-program-process__img")[swiper.activeIndex]
    
    if (dots && img) {
        if (img.complete) {
            centerOnTarget(dots, img, container)
        } else {
            img.addEventListener("load", () => {
                centerOnTarget(dots, img, container)
            })
        }
    }
}

centerDots();
window.addEventListener("resize", centerDots)