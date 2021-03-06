const headerEl = document.querySelector('.festival-header')
const contactsEl = document.querySelector('.festival > .festival-contacts')

if (headerEl && contactsEl) {
    if (contactsEl.getBoundingClientRect().top <= 0) {
        headerEl.classList.add('active')
    } 

    const io = new IntersectionObserver(([entry]) => {
        if (entry.boundingClientRect.top <= 0) {
            headerEl.classList.add('active')
        } else {
            headerEl.classList.remove('active')
        }
    }, { threshold: 1 })

    io.observe(contactsEl)
}