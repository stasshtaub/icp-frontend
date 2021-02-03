/**
 * Центрировать элемент относительно другого элемента
 * @param {HTMLElement} el - Центрируемый элемент.
 * @param {HTMLElement} target - Элемент, относительно которого центрируем.
 * @param {HTMLElement} container - Контейнер с ограниченной шириной, если есть.
 */
export const centerOnTarget = (el, target, container) => {
	const targetPos = target.getBoundingClientRect();
	const targetLeft = container
		? targetPos.left - container.getBoundingClientRect().left
		: targetPos.left;

	el.style.left =
		targetLeft + (target.offsetWidth - el.offsetWidth) / 2 + "px";
};
