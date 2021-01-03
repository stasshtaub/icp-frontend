import { Modal, showMessage, hideModalWindow, showModalWindow } from "./particles/message";

const modal = new Modal("Заявка на участие", document.getElementById("modal-participation"));
const form = document.getElementById("forms-participation");
const consentCheckbox = form.querySelector("[name='consent']");
const submitButton = form.querySelector("[type='submit']");
const loader = document.querySelector(".forms-participation .loader");

consentCheckbox.addEventListener("change", (e) => {
    submitButton.disabled = !submitButton.disabled;
});

form.addEventListener("submit", async (e) => {
    loader.classList.add("loader--active");

    e.preventDefault();
    const { action, method } = form;

    if (action) {
        const body = new FormData(form);

        let title, messageBody, type;

        try {
            const response = await fetch(action, {
                method,
                body
            });
            await response.json();

            title = "Заявка на участие успешно отправлена";
        } catch (error) {
            title = "Заявка на участие не отправлена";
            messageBody = "Произошла какая-то внутренная ошибка сайта и ваша заявка не отправлена.";
            type = "danger";
        } finally {
            showMessage(title, null, messageBody, type, modal);
        }
    }
    
    loader.classList.remove("loader--active");
});
