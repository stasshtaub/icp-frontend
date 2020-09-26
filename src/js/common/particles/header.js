const checkbox = document.getElementById("header__hamburger-checkbox");

const dropdownList = document.querySelector(".header__dropdown-list");
const itemsWithDropdown = document.querySelectorAll(
	".header__navbar-item--has-dropdown"
);

const deativateAllNavEl = () => {
	itemsWithDropdown.forEach((item) => {
		item.classList.remove("header__navbar-item--active");
	});
};

const activateNavEl = (el) => {
	deativateAllNavEl();
	el.classList.add("header__navbar-item--active");
};

const initDropdown = ({ target }) => {
	if (!checkbox.checked) {
		checkbox.checked = true;
	}

	activateNavEl(target);

	dropdownList.innerHTML = "";

	const elements = JSON.parse(target.dataset.elements);

	elements.forEach(({ text, href }) => {
		const li = `
                <li class="header__dropdown-item">
                    <a href="${href}" class="header__dropdown-link">${text}</a>
                </li>
            `;
		dropdownList.insertAdjacentHTML("beforeend", li);
	});
};

itemsWithDropdown.forEach((item) => {
	item.addEventListener("mouseenter", initDropdown);
});

checkbox.addEventListener("change", () => {
	deativateAllNavEl();
});
