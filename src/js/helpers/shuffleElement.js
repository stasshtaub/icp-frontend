/**
 * Переместить элемент
 * @param {HTMLElement} el - Перемещаемый элемент.
 * @param {HTMLElement} target - Элемент, относительно которого вставляем элемент.
 * @param {InsertPosition} position - Расположение.
 */
export const shuffleElement = (el, target, position) => {
    el.parentElement.removeChild(el);
    target.insertAdjacentElement(position, el);
}