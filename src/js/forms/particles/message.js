export class Modal {
    el = null;

    _title = "";

    constructor(title, modal) {
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
                        </div>
                        <div class="modal__content">
                        </div>
                    </div>
                </div>
            `;
    
            this.el = div.firstChild;
        }

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
    }

    hideModal() {
        this.el.classList.remove("modal--active");
    }

    showWindow() {
        this.el.querySelector(".modal__window").classList.add("modal__window--active");
    }

    hideWindow() {
        this.el.querySelector(".modal__window").classList.remove("modal__window--active");
    }

    toggleContent(contentString, title) {
        this.hideWindow();
        this.setContent(contentString);
        if (title) {
            this.title = title;
        }

        setTimeout(() => {
            this.showWindow();
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

export const showMessage = (title, footer, body, type = "success", modal, timer = 5) => {
    console.log("show", type);
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

    if (!modal) {
        modal = new Modal(title);
        document.body.append(modal.el);
    }
    modal.toggleContent(message, title);

    if (type === "success") {
        const timer = modal.el.querySelector(".message__timer");

        let time = 5;
        const id = setInterval(() => {
            time--;
            timer.textContent = time;

            if (time === 0) {
                clearInterval(id);
                modal.hideModal();
            }
        }, 1000);
    }
}