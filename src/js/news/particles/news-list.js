{
	const moreBtn = document.getElementById("news-more__btn");

	if (moreBtn) {
		const listContainer = document.querySelector(".news-list__list");
	
		let currentPage = 1;
		let limit = 8;
		let totalPages = 2;

		const addNews = (img, title, description, date, url) => {
			const artictle = `
			<article class="news-card">
				<a class="news-card__link" href="${url}">
					<div class="news-card__img-wrp">
						<img src="${img}" alt="news image" class="news-card__img" />
					</div>
					<div class="news-card__info">
						<p class="news-card__title text text--s">${title}</p>
						<p class="news-card__description text text--s3">${description}</p>
						<p class="news-card__date text text--xs2">${date}</p>
					</div>
				<a>
			</article>
		`;

			const listItem = `<li class="news-list__item">${artictle}</li>`;

			listContainer.insertAdjacentHTML("beforeend", listItem);
		}

		const fetchNews = async () => {
			const response = await fetch(
				"/local/templates/icpcenter/components/bitrix/news/news/bitrix/news.list/.default/ajax.php?" +
				new URLSearchParams({
					ajax: "y",
					i_num_page: currentPage,
					n_page_size: limit
				})
			);

			return await response.json();
		};

		const loadNews = async () => {
			moreBtn.disabled = true;

			currentPage++;

			const { response: { items, total_page_count } } = await fetchNews();

			items.forEach(({ img, name, description, prop_date, url }) => {
				addNews(img, name, description, prop_date, url)
			});

			if (totalPages !== total_page_count) {
				totalPages = total_page_count;
			}
		
			if (currentPage >= totalPages) {
				moreBtn.parentNode.removeChild(moreBtn);
			}

			moreBtn.disabled = false;
		}

		moreBtn.addEventListener("click", loadNews)
	}
}
