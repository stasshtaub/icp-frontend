const createModal = () => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="modal">
            <div class="modal__backdrop modal__close-trigger"></div>
        </div>
    `;

    return div.querySelector(".modal");
}

const createMessage = (title, footer, body, type) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="modal__window">
            <div class="modal__header">
                <p class="modal__title">${ title }</p>
            </div>
            <div class="modal__content">
                <div class="message message--${ type }">
                    <div class="message__body">
                        ${ body ? body : "" }
                    </div>
                    ${ footer }
                </div>
            </div>
        </div>
    `;

    return div.querySelector(".modal__window");
}

export const showMessage = (title, footer, body, type = "success", modal, timer = 5) => {
    if (!footer) {
        switch (type) {
            case "success":
                footer = `
                    <footer>
                        <span class="text">Окно автоматически закроется через:&nbsp;</span>
                        <span class="message__timer text text--bold">${ timer } секунд</span>
                    </footer>
                `;
                break;
        
            case "danger":
                footer = `
                    <footer>
                        <span class="text">Обратитесь пожалуйста к администратору по эл. почте:&nbsp;</span>
                        <span class="text text--bold">help@icpcentre.org</span>
                    </footer>
                `;
                break;
        }
    }

    const modalWindow = createMessage(title, footer, body, type);

    if (!modal) {
        modal = createModal();
        document.body.append(modal);
    } 
    modal.append(modalWindow);

    if (type === "success") {
        const timer = modalWindow.querySelector("message__timer");

        let time = 5;
        const id = setInterval(() => {
            time--;
            timer.textContent = time;

            if (time === 0) {
                clearInterval(id);
                modal.parentNode.removeChild(modal);
            }
        }, 1000);
    }
}