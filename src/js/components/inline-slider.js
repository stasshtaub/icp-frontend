export const init = (wrapper = document) => {
    {
        const container = wrapper.querySelector(".inline-slider__slider");
        const prevMask = wrapper.querySelector(".inline-slider__nav-mask--left");
        const nextMask = wrapper.querySelector(".inline-slider__nav-mask--right");
        const prevEl = wrapper.querySelector(".inline-slider__nav-btn--prev");
        const nextEl = wrapper.querySelector(".inline-slider__nav-btn--next");
    
        new Swiper(container, {
            slidesPerView: "auto",
            spaceBetween: 30,
            navigation: {
                prevEl,
                nextEl
            },
            mousewheel: {
                forceToAxis: true,
                invert: true,
                sensitivity: 0.7
            },
            on: {
                reachBeginning: () => {
                    prevMask.classList.remove("inline-slider__nav-mask--visible");
                },
    
                reachEnd: () => {
                    nextMask.classList.remove("inline-slider__nav-mask--visible");
                },
    
                fromEdge: ({ activeIndex }) => {
                    if (activeIndex === 0 && !prevMask.classList.contains("inline-slider__nav-mask--visible")) {
                        prevMask.classList.add("inline-slider__nav-mask--visible");
                    } else if (!nextMask.classList.contains("inline-slider__nav-mask--visible")) {
                        nextMask.classList.add("inline-slider__nav-mask--visible");
                    }
                }
            }
        });
    }    
}