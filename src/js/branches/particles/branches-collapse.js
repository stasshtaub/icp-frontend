const colapsedClassName = "branches-map__branch--collapsed";

const branches = document.querySelectorAll(".branches-map__branch");

branches.forEach((branch) => {
	const cityName = branch.querySelector(".branches-map__city");
	const adressWrp = branch.querySelector(".branches-map__adress-wrp");
	const adress = branch.querySelector(".branches-map__adress");

	cityName.addEventListener("click", () => {
		console.log("click, branch:", branch);
		if (branch.classList.contains(colapsedClassName)) {
            branches.forEach(({ classList }) => {
                if (!classList.contains(colapsedClassName)) {
                    classList.add(colapsedClassName);
                }
            });

			branch.classList.remove(colapsedClassName);
			adressWrp.style.height = `${adress.offsetHeight}px`;
		} else {
			branch.classList.add(colapsedClassName);
		}
	});
});
