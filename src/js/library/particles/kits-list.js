{
	const moreBtn = document.getElementById("library-kits__more-btn");
	const listContainer = document.querySelector(".library-kits__list");
	
	let currentPage = 1;
	let limit = 8;
	let totalPages = 2;

	const addNews = (img, title, count, date, url) => {
		const artictle = `
			<a class="library-kits__card" href="${ url }">
				<img class="library-kits__img" src="${ img }" alt="library image">
					<div class="library-kits__info">
						<h3 class="library-kits__title text text--s2">${ title }</h3>
						<p class="library-kits__count">${ count }</p>
					</div>
			</a>
		`;

		const listItem = `<li class="library-kits__item">${ artictle }</li>`;

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
		
		if (currentPage === totalPages) {
			moreBtn.parentNode.removeChild(moreBtn);
		}

		moreBtn.disabled = false;
	}

	moreBtn.addEventListener("click", loadNews)
}
