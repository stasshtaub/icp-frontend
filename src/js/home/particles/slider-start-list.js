{
	const container = document.querySelector(".home__start-slider");
	const wrapper = document.querySelector(".home__start-list");
	const slides = document.querySelectorAll(".home__start-list-item");

	const breakpointMobileL = window.matchMedia("(max-width: 425px)");

	let swiper;

	const breakpointChecker = () => {
		if (breakpointMobileL.matches) {
			console.log('init');
			initSwiper();
		} else {
			if (swiper) {
				console.log('destroy');
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
		
		swiper = new Swiper(".home__start-slider", {
			spaceBetween: 50,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".home__start-list-dots",
				bulletClass: "home__start-list-dot",
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

	breakpointMobileL.addEventListener("change", breakpointChecker);
	breakpointChecker();
}
