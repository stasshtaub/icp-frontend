{
	const container = document.querySelector(".advantages__slider");
	const wrapper = document.querySelector(".advantages__list");
	const slides = document.querySelectorAll(".advantages__list-item");

	const breakpointMobileL = window.matchMedia(
		"screen and (max-width: 425px)"
	);

	let swiper;

	const breakpointChecker = () => {
		if (breakpointMobileL.matches) {
			initSwiper();
		} else {
			if (swiper) {
				destroySwiper();
			}
		}
	};
	
	const initSwiper = ()=> {
		container.classList.add('swiper-container');
		wrapper.classList.add('swiper-wrapper');
		slides.forEach(slide => {
			slide.classList.add('swiper-slide');
		});
		
		swiper = new Swiper(".advantages__slider", {
			spaceBetween: 50,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".advantages__dots",
				bulletClass: "slider__dot",
				bulletActiveClass: "slider__dot--active",
				clickable: true,
			}
		});
	}
	
	const destroySwiper = () => {
		container.classList.remove('swiper-container');
		wrapper.classList.remove('swiper-wrapper');
		slides.forEach(slide => {
			slide.classList.remove('swiper-slide');
		});		
		
		swiper.destroy(true, true);
	}

	try {
		breakpointMobileL.addEventListener("change", breakpointChecker);
	} catch (e1) {
		try {
			breakpointMobileL.addListener(breakpointChecker);
		} catch (e2) {
			console.error(e2);
		}
	}
	
	breakpointChecker();
}
