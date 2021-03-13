import { getContrast } from "../helpers/getContrast";

const init = (grid) => {
    const cards = grid.querySelectorAll(".person-grid__card");

    cards.forEach((card) => {
        const bcgColor = card.style.backgroundColor;
        const contrastColor = getContrast(bcgColor, "#3C3E3F");

        const textEls = card.querySelectorAll(".person-grid__content > *");
        textEls.forEach((el) => {
            el.style.color = contrastColor
        })

        const mask = card.querySelector(".person-grid__img-mask");
        const rgba = bcgColor.replace(')', ', 0)').replace('rgb', 'rgba');
        const angle = getComputedStyle(card).getPropertyValue("--mask-angle")
        const maskBcg = `linear-gradient(${angle}, ${bcgColor}, ${rgba})`
        mask.style.background = maskBcg;
    })
};

const els = document.querySelectorAll(".person-grid");
els.forEach(init);