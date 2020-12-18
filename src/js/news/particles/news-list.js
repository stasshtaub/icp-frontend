{
	const moreBtn = document.getElementById("news-more__btn");
	const listContainer = document.querySelector(".news-list__list");
	
	let lastId = listContainer.querySelectorAll(".news-card").length;
	let limit = 8;

	const addNews = (img, title, description, date) => {
		const artictle = `
			<article class="news-card">
				<img src="${ img }" alt="news image" class="news-card__img" />
				<div class="news-card__info">
					<p class="news-card__title text text--s">${ title }</p>
					<p class="news-card__description text text--s3">${ description }</p>
					<p class="news-card__date text text--xs2">${ date }</p>
				</div>
			</article>
		`;

		const listItem = `<li class="news-list__item">${ artictle }</li>`;

		listContainer.insertAdjacentHTML("beforeend", listItem);
	}

	const fetchNews = async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${ lastId }&_limit=${ limit }`);
		return await response.json();
	};

	const loadNews = async () => {
		moreBtn.disabled = true;

		const news = await fetchNews();

		news.forEach(({ id, title, body }) => {
			addNews(`https://loremflickr.com/640/${ 400 + id }`, title, body, "1 декабря")
			lastId++;
		});

		moreBtn.disabled = false;
	}

	moreBtn.addEventListener("click", loadNews)
}
