const form = document.getElementById("forms-participation");
const consentCheckbox = form.querySelector("[name='consent']");
const submitButton = form.querySelector("[type='submit']");

consentCheckbox.addEventListener("change", (e) => {
    submitButton.disabled = !submitButton.disabled;
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { action, method } = form;

    if (action) {
        const body = new FormData(form);

        try {
            const response = await fetch(action, {
                method,
                body
            });
            const result = await response.json();
            console.log('Успех:', JSON.stringify(result));
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
})