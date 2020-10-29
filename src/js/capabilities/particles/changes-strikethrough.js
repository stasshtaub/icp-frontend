const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(({ isIntersecting, target }) => {
		if (isIntersecting) {
			const lines = target.querySelectorAll(
				".capabilities-changes__strikethrough-line"
			);

			// Расстояние по высоте за которое линия должна быть полностью зачеркнута
			const strikeHeight = innerHeight / lines.length;

			function onScroll() {
				lines.forEach((line, i) => {
					const bottom = i * strikeHeight;

					// Устанавливаем '--scroll' в зависимости от расстояния от верхнего края строки до верхнего края области зачеркивания для этой строки
					// Когда расстояние между ними = 0: '--scroll' = 1
					// Когда расстояние между ними = strikeHeight - высота строки: '--scroll' = 0
				});
			}

			document.addEventListener("scroll", onScroll);
		}
	});
});

const container = document.querySelector(
	".capabilities-changes__strikethrough"
);

intersectionObserver.observe(container);
