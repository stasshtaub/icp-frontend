const colapsedClassName = "branches-map__branch--collapsed";

const branches = document.querySelectorAll(".branches-map__branch");

branches.forEach((branch) => {
	const cityName = branch.querySelector(".branches-map__city");
	const collapsedWrp = branch.querySelector(".branches-map__collapsed-wrp");
	const collapsedContent = branch.querySelector(".branches-map__collapsed-content");

	cityName.addEventListener("click", () => {
		if (branch.classList.contains(colapsedClassName)) {
            branches.forEach(({ classList }) => {
                if (!classList.contains(colapsedClassName)) {
                    classList.add(colapsedClassName);
                }
            });

			branch.classList.remove(colapsedClassName);
			collapsedWrp.style.height = `${collapsedContent.offsetHeight}px`;
		} else {
			branch.classList.add(colapsedClassName);
		}
	});
});
