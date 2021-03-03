import { createElementFromHTML } from "../../helpers/createElementFromHTML"

const tabletXsBreakpoint = 530;

const checkbox = document.getElementById("header__checkbox-dropdown");
const backdropDropdown = document.querySelector(".header__backdrop--dropdown");
const backdropLevel3 = document.querySelector(".header__backdrop--level3");

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
	closeLevel3();
	
	if (!target.classList.contains("header__navbar-item--active")) {
		setTimeout(() => {
			checkbox.checked = true;
		}, 0);
	}

	activateNavEl(target);

	dropdownList.innerHTML = "";

	const elements = JSON.parse(target.dataset.elements);

	elements.forEach(({ text, href, level3 }) => {
		const li = createElementFromHTML('<li class="header__dropdown-item"></li>');
		li.addEventListener("mouseenter", closeLevel3);

		if (level3) {
			li.classList.add("header__dropdown-item--level2");
			li.dataset.elements = JSON.stringify(level3);

			const span = createElementFromHTML(`<span class="header__dropdown-item-text">${ text }</span>`);
			li.append(span);

			li.addEventListener("mouseenter", initLevel3);
		} else {
			const link = createElementFromHTML(`<a href="${href}" class="header__dropdown-link">${text}</a>`);
			li.append(link);
		}
		dropdownList.append(li);
	});
};

const closeDropdown = () => {
	checkbox.checked = false;
	deactivateAllNavEl();
};

checkbox.addEventListener("change", deactivateAllNavEl);

backdropDropdown.addEventListener("mouseenter", () => {
	closeDropdown();
	closeLevel3();
});

itemsWithDropdown.forEach((item) => {
	item.addEventListener("mouseenter", initDropdown);
});

const level3List = document.querySelector(".header__level3-list");

const deactivateLevel2Elements = () => {
	const level2Items = document.querySelectorAll("header__dropdown-item--level2");
	level2Items.forEach(({ classList }) => {
		classList.remove("header__dropdown-item--active");
	});
};

const initLevel3 = ({ target }) => {
	if (window.innerWidth < tabletXsBreakpoint) {
		if (backdropLevel3.classList.contains("header__backdrop--show")) {
			return;
		}
		backdropLevel3.classList.add("header__backdrop--show");
	}
	
	if (!level3List.classList.contains("header__level3-list--show")) {
		level3List.classList.add("header__level3-list--show");
	}

	deactivateLevel2Elements();
	target.classList.add("header__dropdown-item--active");

	level3List.innerHTML = "";
	const elements = JSON.parse(target.dataset.elements);

	elements.forEach(({ text, href }) => {
		const li = createElementFromHTML(`
			<li class="header__dropdown-item">
				<a href="${href}" class="header__dropdown-link">${text}</a>
			</li>
		`);
		level3List.append(li);
	});
};

const closeLevel3 = () => {
	backdropLevel3.classList.remove("header__backdrop--show");
	level3List.classList.remove("header__level3-list--show");
	level3List.innerHTML = "";
}

backdropLevel3.addEventListener("mouseenter", closeLevel3);