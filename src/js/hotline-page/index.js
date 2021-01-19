import { lazyAnimationObserve } from "../helpers/lazyAnimationObserve"

const contentContainers = document.querySelectorAll(".marquee__content");

contentContainers.forEach((content) => {
	const { children } = content.cloneNode(true);

	if (children) {
		content.append(...children);
	}
});

const animTriggerClass = "marquee--active";
const marquees = document.querySelectorAll(".marquee");
lazyAnimationObserve(marquees, animTriggerClass);
