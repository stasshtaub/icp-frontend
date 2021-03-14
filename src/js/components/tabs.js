const init = (el) => {
	const triggers = el.querySelectorAll(".tabs__button[data-tab]");
	const tabContents = el.querySelectorAll(".tabs__item[data-tab]");

	triggers.forEach((trigger) => {
		trigger.addEventListener("click", (e) => {
			e.preventDefault();
			openTab(e);
		});
	});

	const openTab = (evt) => {
		const { tab } = evt.currentTarget.dataset;

		if (tab) {
			const currTab = el.querySelector(
				`.tabs__item[data-tab='${tab}']`
			);

			if (currTab) {
				tabContents.forEach((tabContent) => {
					tabContent.classList.remove("active");
				});

				triggers.forEach((trigger) => {
					trigger.classList.remove("active");
				});

				currTab.classList.add("active");
				evt.currentTarget.classList.add("active");
			}
		}
	}
}

const tabs = document.querySelectorAll(".tabs");
tabs.forEach(init);
