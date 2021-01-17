const container = document.querySelector(".reviews-list");

const msnry = new Masonry(container, {
	itemSelector: ".reviews-list__item",
});

const updateLayout = () => {
	imagesLoaded(container).on('progress', () => {
		msnry.layout();
	});
};

updateLayout();

const moreBtn = document.getElementById("reviews-more__btn");
const listContainer = document.querySelector(".reviews-list");

let currentPage = 1;
let limit = 10;
let totalPages = 2;

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

const fetchReviews = async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/posts?" +
			new URLSearchParams({
				_start: currentPage * limit,
				_limit: limit,
			})
	);

	return await response.json();
};

const loadReviews = async () => {
	moreBtn.disabled = true;

	currentPage++;

	const items = await fetchReviews();

	const elems = [];
	const fragment = document.createDocumentFragment();

	items.forEach(({ id, title, body }) => {
		const avatar = `https://loremflickr.com/50/50?random=${id}`;
		const name = title.split(" ").slice(0, 2).join(" ");
		const programName = "Agile-коачинг";
		const programLink = "#";

		const elem = createReviewsItem(
			body,
			avatar,
			name,
			programName,
			programLink
		);
		fragment.appendChild(elem);
		elems.push(elem);
	});

	container.appendChild(fragment);
	msnry.appended(elems);
	
	updateLayout();

	// if (totalPages !== total_page_count) {
	// 	totalPages = total_page_count;
	// }

	// if (currentPage === totalPages) {
	// 	moreBtn.parentNode.removeChild(moreBtn);
	// }

	moreBtn.disabled = false;
};

moreBtn.addEventListener("click", loadReviews);
