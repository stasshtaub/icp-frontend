const colapsedClassName = "branches-map__adress-wrp--collapsed";

const adressWrps = document.querySelectorAll(".branches-map__adress-wrp");
const branchInfoContainers = document.querySelectorAll(
	".branches-map__branch-info"
);

branchInfoContainers.forEach((branchInfo) => {
	const cityName = branchInfo.querySelector(".branches-map__city");
	const adressWrp = branchInfo.querySelector(".branches-map__adress-wrp");
	const adress = branchInfo.querySelector(".branches-map__adress");

	cityName.addEventListener("click", () => {
		if (adressWrp.classList.contains(colapsedClassName)) {
            adressWrps.forEach(({ classList }) => {
                if (!classList.contains(colapsedClassName)) {
                    classList.add(colapsedClassName);
                }
            });

			adressWrp.classList.remove(colapsedClassName);
			adressWrp.style.height = `${adress.offsetHeight}px`;
		} else {
			adressWrp.classList.add(colapsedClassName);
		}
	});
});
