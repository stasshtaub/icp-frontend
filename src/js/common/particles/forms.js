const buttons = document.querySelectorAll("a[data-modal], button[data-modal]");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = document.getElementById(btn.dataset.modal);
        if (modal) {
            modal.classList.add("modal--active");
            document.body.classList.add("noscroll");

            const closeTriggers = modal.querySelectorAll(".modal__close-trigger");
            closeTriggers.forEach((trigger) => {
                trigger.addEventListener("click", () => {
                    modal.classList.remove("modal--active");
                    document.body.classList.remove("noscroll");
                })
            })
        }
    });
});