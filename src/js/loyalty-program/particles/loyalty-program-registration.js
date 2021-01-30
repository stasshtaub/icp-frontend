import IMask from "imask";
import { showMessage } from "../../forms/particles/message";

const form = document.getElementById("loyalty-program-registration__form");

if (form) {
	const consentCheckbox = form.querySelector("[name='consent']");
	const submitButton = form.querySelector("[type='submit']");
	const loader = document.querySelector(".loyalty-program-registration .loader");

	consentCheckbox.addEventListener("change", (e) => {
		submitButton.disabled = !submitButton.disabled;
	});

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		loader.classList.add("loader--active");

		const { action, method } = form;

		if (action) {
			const body = new FormData(form);

			let title, messageBody, type;

			try {
				const response = await fetch(action, {
					method,
					body,
				});
				await response.json();

				title = "Заявка на регистрацию успешно отправлена";
			} catch (error) {
				title = "Заявка на регистрацию не отправлена";
				messageBody =
					"Произошла какая-то внутренная ошибка сайта и ваша заявка не отправлена.";
				type = "danger";
			} finally {
				showMessage(title, null, messageBody, type);
			}
		}

		loader.classList.remove("loader--active");
	});

	// Маска номера телефона
	IMask(form.querySelector("input[name='phone']"), {
		mask: "+{7}-000-000-00-00",
	});
}
