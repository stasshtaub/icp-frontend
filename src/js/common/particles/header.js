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
		let li;

		if (level3) {
			li = document.createElement("li");
			li.className = "header__dropdown-item header__dropdown-item--level2";
			li.dataset.elements = JSON.stringify(level3);

			const span = document.createElement("span");
			span.className = "header__dropdown-item-text";
			span.textContent = text;

			li.append(span);
			li.addEventListener("mouseenter", initLevel3);
			li.addEventListener("touchend", initLevel3);
			dropdownList.append(li);
		} else {
			li = `
				<li class="header__dropdown-item">
					<a href="${href}" class="header__dropdown-link">${text}</a>
				</li>
			`;
			dropdownList.insertAdjacentHTML("beforeend", li);
		}
	});
};

const closeDropdown = () => {
	checkbox.checked = false;
	deactivateAllNavEl();
};

checkbox.addEventListener("change", () => {
	deactivateAllNavEl();
});

backdropDropdown.addEventListener("mouseenter", () => {
	closeDropdown();
	closeLevel3();
});
backdropDropdown.addEventListener("touchend", (e) => {
	closeDropdown();
	closeLevel3();
});

itemsWithDropdown.forEach((item) => {
	item.addEventListener("mouseenter", initDropdown);
	item.addEventListener("touchend", initDropdown);
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
		const li = `
			<li class="header__dropdown-item">
				<a href="${href}" class="header__dropdown-link">${text}</a>
			</li>
		`;
		level3List.insertAdjacentHTML("beforeend", li);
	});
};

const closeLevel3 = () => {
	if (backdropLevel3.classList.contains("header__backdrop--show")) {
		backdropLevel3.classList.remove("header__backdrop--show");
	}
	level3List.innerHTML = "";
	level3List.classList.remove("header__level3-list--show");
}

backdropLevel3.addEventListener("mouseenter", () => {
	closeLevel3();
});

backdropLevel3.addEventListener("touchend", (e) => {
	closeLevel3();
});