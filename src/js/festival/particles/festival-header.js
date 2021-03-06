const contactsEl = document.querySelector('.festival > .festival-contacts')
const contacsContent = contactsEl?.querySelector('.festival-contacts__content')

const stickyClass = 'festival-contacts__content--sticky'

const initHeight = () => {
    contactsEl.style.minHeight = `${ contacsContent.offsetHeight }px`
}

if (contactsEl.getBoundingClientRect().top <= 0) {
    contacsContent.classList.add(stickyClass)
} 

const io = new IntersectionObserver(([entry]) => {
    console.log(entry);
    if (entry.boundingClientRect.top <= 0) {
        contacsContent.classList.add(stickyClass)
    } else {
        contacsContent.classList.remove(stickyClass)
    }
}, { threshold: 1 })

initHeight()
io.observe(contactsEl)
window.addEventListener("resize", initHeight)