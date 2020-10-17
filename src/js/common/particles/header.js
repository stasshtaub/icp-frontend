const checkbox = document.getElementById("header__checkbox-dropdown");
const backdropDropdown = document.querySelector(".header__backdrop--dropdown");

const dropdownList = document.querySelector(".header__dropdown-list");
const itemsWithDropdown = document.querySelectorAll(
	".header__navbar-item--has-dropdown"
);

const deactivateAllNavEl = () => {
	itemsWithDropdown.forEach((item) => {
		item.classList.remove("header__navbar-item--active");
	});
};

const activateNavEl = (el) => {
	deactivateAllNavEl();
	el.classList.add("header__navbar-item--active");
};

const initDropdown = ({ target }) => {
	if (!target.classList.contains("header__navbar-item--active")) {
		setTimeout(() => {
			checkbox.checked = true;
		}, 0);
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

const closeDropdown = () => {
	checkbox.checked = false;
	deactivateAllNavEl();
}

checkbox.addEventListener("change", () => {
	deactivateAllNavEl();
});

backdropDropdown.addEventListener("mouseenter", closeDropdown);
backdropDropdown.addEventListener("touchend", closeDropdown);

itemsWithDropdown.forEach((item) => {
	item.addEventListener("mouseenter", initDropdown);
	item.addEventListener("touchend", initDropdown);
});
