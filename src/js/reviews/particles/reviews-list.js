const container = document.querySelector(".reviews-list");

const msnry = new Masonry(container, {
	itemSelector: ".reviews-list__item",
});

const updateLayout = () => {
	imagesLoaded(container).on("progress", () => {
		msnry.layout();
	});
};

updateLayout();

let isLoading = false;

const listContainer = document.querySelector(".reviews-list");
const loader = document.createElement("div");
loader.className = "scroll-loader";
listContainer.after(loader);

let currentPage = 1;
let limit = 10;
let totalPages = 2;

const startLoading = () => {
	isLoading = true;
	loader.classList.add("scroll-loader--active");
};

const endLoading = () => {
	isLoading = false;
	loader.classList.remove("scroll-loader--active");
};

const createReviewsItem = (text, avatar, name, programName, programLink) => {
	const artictle = `
        <article class="reviews-card">
            <section class="reviews-card__body">
                <p class="text text--s">${text}</p>
            </section>
            <footer class="reviews-card__footer">
                <div class="reviews-card__author">
                    <img class="reviews-card__avatar" src="${avatar}" alt="${name}">
                    <span class="reviews-card__name text text--bold700">${name}</span>
                </div>
                <div class="reviews-card__program text text--xs">
                    <span>Прошла программу: </span>
                    <a class="reviews-card__program-link" href="${programLink}">${programName}</a>
                </div>
            </footer>
        </article>
    `;

	const listItem = `<li class="reviews-list__item">${artictle}</li>`;

	const tmpDiv = document.createElement("div");
	tmpDiv.innerHTML = listItem;
	return tmpDiv.querySelector(".reviews-list__item");
};

const fetchReviews = async (n_page_size, i_num_page) => {
	const response = await fetch(
		"/local/templates/icpcenter/components/bitrix/news.list/about_reviews_list/ajax.php?" +
			new URLSearchParams({
				ajax: "y",
				n_page_size,
				i_num_page,
			})
	);

	return await response.json();
};

const loadReviews = async () => {
	currentPage++;

	const {
		response: { items, total_page_count },
	} = await fetchReviews(limit, currentPage);

	if (total_page_count < currentPage) {
		return true;
	}

	if (totalPages !== total_page_count) {
		totalPages = total_page_count;
	}

	const elems = [];
	const fragment = document.createDocumentFragment();

	items.forEach(
		({ description, thumb_url, author, program_name, program_url }) => {
			const elem = createReviewsItem(
				description,
				thumb_url,
				author,
				program_name,
				program_url
			);
			fragment.appendChild(elem);
			elems.push(elem);
		}
	);

	container.appendChild(fragment);
	msnry.appended(elems);

	updateLayout();

	return total_page_count === currentPage;
};

const io = new IntersectionObserver(
	async ([entry], observer) => {
		if (entry.isIntersecting && !isLoading) {
			startLoading();

			const isEnd = await loadReviews();
			if (isEnd) {
				observer.unobserve(entry.target);
			}

			endLoading();
		}
	},
	{
		rootMargin: "30%",
	}
);

io.observe(loader);
