{
	const triggers = document.querySelectorAll(".tabs__button[data-tab]");
	const tabContents = document.querySelectorAll(".tabs__item[data-tab]");

	triggers.forEach((trigger) => {
		trigger.addEventListener("click", (e) => {
			e.preventDefault();
            openTab(e);
        });
	});

	const openTab = (evt) => {
		const { tab } = evt.currentTarget.dataset;

		if (tab) {
			const currTab = document.querySelector(
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
