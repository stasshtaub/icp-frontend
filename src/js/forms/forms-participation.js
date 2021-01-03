import { showMessage } from "./particles/message";

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

        try {
            const response = await fetch(action, {
                method,
                body
            });
            await response.json();
            
            showMessage("Заявка на участие успешно отправлена");
        } catch (error) {
            showMessage("Заявка на участие не отправлена", null, "Произошла какая-то внутренная ошибка сайта и ваша заявка не отправлена.", "danger");
        }
    }
    
    loader.classList.remove("loader--active");
});
