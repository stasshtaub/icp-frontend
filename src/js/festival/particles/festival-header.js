const contactsEl = document.querySelector(".festival > .festival-contacts");
const contacsContent = contactsEl?.querySelector(".festival-contacts__content");

const stickyClass = "festival-contacts__content--sticky";
const activeClass = "festival-contacts__content--active";

const initHeight = () => {
	contactsEl.style.minHeight = `${contacsContent.offsetHeight}px`;
};

if (contactsEl.getBoundingClientRect().top <= 0) {
	contacsContent.classList.add(stickyClass);
}

const io = new IntersectionObserver(
	([entry]) => {
		if (entry.boundingClientRect.top <= 0) {
			contacsContent.classList.add(stickyClass);
		} else {
			contacsContent.classList.remove(stickyClass);
		}
	},
	{ threshold: 1 }
);

initHeight();
io.observe(contactsEl);
window.addEventListener("resize", initHeight);

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
	const st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > lastScrollTop) {
		contacsContent.classList.remove(activeClass);
	} else {
		if (contacsContent.classList.contains(stickyClass)) {
			contacsContent.classList.add(activeClass);
		}
	}
	lastScrollTop = st <= 0 ? 0 : st;
});
