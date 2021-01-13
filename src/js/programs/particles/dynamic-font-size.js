const maxLength = 10;
const titles = document.querySelectorAll(".programs-card__title");

titles.forEach(({ textContent, firstElementChild }) => {
    const words = textContent.replace("-", " ").split(" ");
    if (words.some(({ length }) => length > maxLength)) {
        firstElementChild.classList.replace("text--m", "text--s2");
    }
})