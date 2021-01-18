import { Modal, showMessage } from "./particles/message";

const buttons = document.querySelectorAll("[data-modal='modal-participation']");
const modal = new Modal("Заявка на участие", document.getElementById("modal-participation"));
const form = document.getElementById("forms-participation");
const consentCheckbox = form.querySelector("[name='consent']");
const submitButton = form.querySelector("[type='submit']");
const loader = document.querySelector(".forms-participation .loader");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const tariff = btn.dataset.tariff || null;
        
        let tariffInput = form.querySelector("[name='tariff']");

        if (tariffInput) {
            if (tariff) {
                tariffInput.value = tariff;
                tariffInput.type = "hidden";
                tariffInput.name = "tariff";
            } else {
                tariffInput.parentNode.removeChild(tariffInput);
            }
        } else {
            if (tariff) {
                tariffInput = document.createElement("input");
                form.appendChild(tariffInput);
                tariffInput.value = tariff;
                tariffInput.type = "hidden";
                tariffInput.name = "tariff";
            }
        }

        modal.showModal()
    });
})

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
            modal.hideModal();
            showMessage(title, null, messageBody, type);
        }
    }
    
    loader.classList.remove("loader--active");
});

// Маска номера телефона
IMask(form.querySelector("input[name='phone']"), {
	mask: "+{7}-000-000-00-00"
});
