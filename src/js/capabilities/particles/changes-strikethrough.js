const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(({ isIntersecting, target }) => {
		if (isIntersecting) {
			const box = target.getBoundingClientRect();
			const top = box.top + pageYOffset;
			console.log("top:", top);

			window.addEventListener("scroll", onScroll);
		} else {
			window.removeEventListener("scroll", onScroll);
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
