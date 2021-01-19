export function lazyAnimationObserve(elements, activeClass) {
	const io = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0) {
				entry.target.classList.add(activeClass);
				io.unobserve(entry.target);
			}
		});
	});

	elements.forEach((element) => {
		io.observe(element);
	});
}
