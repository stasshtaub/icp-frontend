const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(({ isIntersecting, target }) => {
		if (isIntersecting) {
			const box = target.getBoundingClientRect();
			const top = box.top + pageYOffset;

			console.log(top, target.className);

			window.addEventListener("scroll", onScroll);
		} else {
			window.removeEventListener("scroll", onscroll);
		}
	});
});

const onScroll = () => {
	console.log("scroll");
};

const items = document.querySelectorAll(
	".capabilities-changes__strikethrough-item"
);

items.forEach((item) => {
	intersectionObserver.observe(item);
});
