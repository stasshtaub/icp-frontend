// const intersectionObserver = new IntersectionObserver((entries) => {
// 	entries.forEach(({isIntersecting, target}) => {
// 		function onScroll() {
// 			const scrollValue =
// 				1 - target.getBoundingClientRect().top / innerHeight;
// 			target.style.setProperty('--scroll', scrollValue);
// 		}
// 		if (isIntersecting) {
// 			document.addEventListener('scroll', onScroll);
// 		} else {
// 			document.removeEventListener('scroll', onScroll);
// 		}
// 	});
// });

// const container = document.querySelector(
// 	'.capabilities-changes__strikethrough',
// );

// intersectionObserver.observe(container);

const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(({isIntersecting, target}) => {
		if (isIntersecting) {
			target.classList.add(
				'capabilities-changes__strikethrough-line--animated',
			);
		}
	});
});

const lines = document.querySelectorAll(
	'.capabilities-changes__strikethrough-line',
);

lines.forEach((line) => {
	intersectionObserver.observe(line);
});
