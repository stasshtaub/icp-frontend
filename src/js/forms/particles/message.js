import { Modal } from "../../components/modal";

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