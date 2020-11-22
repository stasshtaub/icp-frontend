{
	const loader = document.querySelector(".about-news__slide--loader");
	let lastId = document.querySelectorAll(".about-news__slide:not(.about-news__slide--loader)").length;
	let limit = 10;
	let loading = false;

	const loadNews = async () => {
		const response = await fetch(`http://jsonplaceholder.typicode.com/photos?_start=${lastId}&_limit=${limit}`);
		return await response.json();
	};

	const swiper = new Swiper(".about-news__slider", {
		slidesPerView: "auto",
		spaceBetween: 30,
		navigation: {
			nextEl: document.querySelector(".about-news__next-btn")
		},
		on: {
			slideNextTransitionEnd: async ({ slides, activeIndex }) => {
				// 4 - количество оставшихся справа слайдов до подгрузки
				if (!loading && slides.length >= limit && activeIndex >= slides.length - 4) {
					loading = true;

					const news = await loadNews();

					news.forEach(({ title, url }) => {
						const slide = `
							<li class="about-news__slide swiper-slide">
								<div class="about-news__card">
									<img class="about-news__img" src="${url}" alt="${title}">
									<p class="about-news__title">${title}</p>
									<p class="about-news__description">${title} ${title} ${title}</p>
									<p class="about-news__date">30 августа</p>
								</div>
							</li>
						`;
						swiper.addSlide(lastId - 1, slide);
						lastId++;
					});

					loading = false;
				}
			}
		}
	});
}
