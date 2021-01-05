export class Modal {
    el = null;

    _title = "";

    constructor(title, modal, isWhite, destroyOnClose) {
        if (modal) {
            this.el = modal;
        } else {
            const div = document.createElement("div");
    
            div.innerHTML = `
                <div class="modal">
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
        document.body.classList.add("noscroll");
    }

    hideModal() {
        this.el.classList.remove("modal--active");
        document.body.classList.remove("noscroll");
    }

    mount() {
        document.body.append(this.el);
    }

    destroy() {
        this.hideModal();
        setTimeout(() => {
            this.el.parentNode.removeChild(this.el);
        }, 100);
    }
}

const createMessage = (footer, body, type) => {
    return `
        <div class="message message--${ type }">
            <div class="message__body">
                ${ body ? body : "" }
            </div>
            ${ footer }
        </div>
    `;
}

export const showMessage = (title, footer, body, type = "success", timer = 5) => {
    if (!footer) {
        switch (type) {
            case "success":
                console.log("case success");
                footer = `
                    <footer>
                        <span class="text">Окно автоматически закроется через:&nbsp;</span>
                        <span class="message__timer text text--bold">${ timer } секунд</span>
                    </footer>
                `;
                break;
        
            case "danger":
                console.log("case danger");
                footer = `
                    <footer>
                        <span class="text">Обратитесь пожалуйста к администратору по эл. почте:&nbsp;</span>
                        <span class="text text--bold">help@icpcentre.org</span>
                    </footer>
                `;
                break;
        }
    }

    const message = createMessage(footer, body, type);
    const modal = new Modal(title, null, true, true);
    modal.setContent(message)
    modal.mount();
    modal.showModal();

    if (type === "success") {
        const translations = {
            5: "5 секунд",
            4: "4 секунды",
            3: "3 секунды",
            2: "2 секунды",
            1: "1 секунду",
        }

        const timer = modal.el.querySelector(".message__timer");

        let time = 5;
        const id = setInterval(() => {
            time--;
            timer.textContent = translations[time];

            if (time === 0) {
                clearInterval(id);
                modal.destroy();
            }
        }, 1000);
    }
}