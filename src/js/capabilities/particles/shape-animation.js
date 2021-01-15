const shapeList = document.querySelector(".capabilities-more__list");
if (shapeList) {
	const options = {
		threshold: 1,
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(({ isIntersecting, target }) => {
			if (isIntersecting) {
				target.classList.add("capabilities-more__list--animated");
			} else {
				target.classList.remove("capabilities-more__list--animated");
			}
		});
	}, options);

	observer.observe(shapeList);
}
