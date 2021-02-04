import { showMessage } from "../../components/message";

const form = document.getElementById("comments-form");

if (form) {
	const loader = form.querySelector(".loader");

	form.addEventListener("submit", (e) => {
		loader && loader.classList.add("loader--active");

		e.preventDefault();
		onSubmit();

		loader && loader.classList.remove("loader--active");
	});

	const replyButtons = document.querySelectorAll(".comment__reply-btn");
	const replyInput = form.querySelector("[name='reply']");
	const textarea = form.querySelector("[name='text']");

	replyButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const { commentId, authorName } = e.target.dataset;

			if (commentId && authorName) {
				reply(commentId, authorName);
			}
		});
	});

	const reply = (commentId, authorName) => {
		if (replyInput) {
			replyInput.value = commentId;

			const tmpDiv = document.createElement("div");
			tmpDiv.innerHTML = `
				<div class="comments-form__reply-tag">
					<div class="comments-form__reply-tag-content">
						<span class="text text--xs">Ответ для ${ authorName }</span>
					</div>
					<button class="comments-form__reply-tag-close"></button>
				</div>
			`;
			const replyTag = tmpDiv.children[0];
			const tagCLoseBtn = replyTag.querySelector(
				".comments-form__reply-tag-close"
			);
			
			tagCLoseBtn.addEventListener("click", () => {
				replyTag.parentElement.removeChild(replyTag);
				replyInput.value = "";
			});

			textarea.before(replyTag);
			textarea.parentElement.parentElement.scrollIntoView({
				behavior: "smooth",
			});
		}
	};
}

const onSubmit = async () => {
	const { action, method } = form;

	if (action) {
		const body = new prepareFormData(form);

		let title, messageBody, type;

		try {
			const response = await fetch(action, {
				method,
				body,
			});
			await response.json();

			title = "Комментарий успешно отправлен";
		} catch (error) {
			title = "Не удалось отправить комментарий";
			messageBody =
				"Произошла какая-то внутренная ошибка сайта и ваш комментарий не отправлен.";
			type = "danger";
		} finally {
			showMessage(title, null, messageBody, type);
		}
	}
};

/**
 * Подготовить FormData, включая div с contenteditable
 * @param {HTMLFormElement} form - Форма.
 */
const prepareFormData = (form) => {
	const fd = new FormData(form);

	const editableDivs = form.querySelectorAll("[contenteditable='true']");
	editableDivs.forEach((div) => {
		const { name } = div.dataset;

		if (name) {
			fd.append(name, div.textContent);
		}
	});

	return fd;
};
