export class Modal {
    el = null;

    _title = "";

    constructor(title, modal, isWhite, destroyOnClose, customClass = "") {
        if (modal) {
            this.el = modal;
        } else {
            const div = document.createElement("div");
            
            console.log("customClass", customClass);
            div.innerHTML = `
                <div class="modal ${ customClass }">
                    <div class="modal__backdrop modal__close-trigger">
                    </div>
                    <div class="modal__window modal__window--active">
                        <div class="modal__header">
                            <p class="modal__title">${ this.title }</p>
                            <div class="modal__close-btn ${ isWhite ? "modal__close-btn--white" : "" } modal__close-trigger"></div>
                        </div>
                        <div class="modal__content">
                        </div>
                    </div>
                </div>
            `;
    
            this.el = div.querySelector(".modal");
        }

        const closeTriggers = this.el.querySelectorAll(".modal__close-trigger");
        closeTriggers.forEach((trigger) => {
            trigger.addEventListener("click", () => { destroyOnClose ? this.destroy() : this.hideModal() } )
        })

        this.title = title;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
        this.el.querySelector(".modal__title").textContent = value;
    }

    setContent(contentString) {
        this.el.querySelector(".modal__content").innerHTML = contentString;
    }

    showModal() {
        this.el.classList.add("modal--active");
        document.documentElement.classList.add("noscroll");
    }

    hideModal() {
        this.el.classList.remove("modal--active");
        document.documentElement.classList.remove("noscroll");
    }

    mount() {
        document.body.append(this.el);
    }

    destroy() {
        this.hideModal();
        setTimeout(() => {
            this.el.parentNode?.removeChild(this.el);
        }, 100);
    }
}