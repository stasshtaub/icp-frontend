import { showMessage } from "../../components/message";
import { _fetch } from "../../helpers/_fetch";

const form = document.getElementById("comments-form");

if (form) {
	const loader = form.querySelector(".loader");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		grecaptcha.ready(async () => {
			loader && loader.classList.add("loader--active");

			const token = await grecaptcha.execute(
				"6LeU5UkaAAAAALkmPBk8OgAGsiWiT4HeLcIdVw_v",
				{ action: "add_comment" }
			);
			await onSubmit(token);

			loader && loader.classList.remove("loader--active");
		});
	});

	const replyButtons = document.querySelectorAll(".comment__reply-btn");
	const pcidInput = form.querySelector("[name='pcid']");
	const dlInput = form.querySelector("[name='dl']");
	const textarea = form.querySelector("[name='text']");
	const checkbox = form.querySelector("[name='remember']");
	const submitBtn = form.querySelector(".comments-form__submit-btn");

	checkbox.addEventListener("change", () => {
		submitBtn.disabled = !checkbox.checked
	})

	form.addEventListener("reset", () => {
		submitBtn.disabled = true
	})

	replyButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const { pcid, dl, authorName } = e.target.dataset;
			reply(pcid, dl, authorName);
		});
	});

	const reply = (pcid, dl, authorName) => {
		removeReplyTag();

		if (pcidInput) {
			pcidInput.value = pcid;

			const tmpDiv = document.createElement("div");
			tmpDiv.innerHTML = `
				<div class="comments-form__reply-tag">
					<div class="comments-form__reply-tag-content">
						<span class="text text--xs">Ответ для ${authorName}</span>
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
				pcidInput.value = "";
				if (dlInput) {
					dlInput.value = "";
				}
			});

			textarea.before(replyTag);
			textarea.parentElement.parentElement.scrollIntoView({
				behavior: "smooth",
			});
		}

		if (dlInput) {
			dlInput.value = dl;
		}
	};

	const removeReplyTag = () => {
		const tag = document.querySelector(".comments-form__reply-tag");
		if (tag) {
			tag.parentElement.removeChild(tag);
		}
	};
}

const onSubmit = async (token) => {
	const { action, method } = form;

	if (action) {
		const body = new FormData(form);
		body.append("g-recaptcha", token);

		let title, messageBody, type;

		try {
			const { message } = await _fetch(action, {
				method,
				body,
			});

			title = message || "Комментарий успешно отправлен";
			form.reset();
		} catch (error) {
			if (error.message) {
				title = error.message;
			} else {
				title = "Не удалось отправить комментарий";
				messageBody =
					"Произошла какая-то внутренная ошибка сайта и ваш комментарий не отправлен.";
			}
			type = "danger";
		} finally {
			showMessage(title, null, messageBody, type);
		}
	}
};

const avatarImg = document.querySelector(".comments-form__avatar-img");
const avatarInput = document.querySelector(".comments-form__avatar-input");
const avatarBtn = document.querySelector(".comments-form__avatar-label");

const handleUpload = (event) => {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.readAsDataURL(file);
	reader.onloadend = () => {
		const imageBuffer = reader.result;
		avatarImg.style.background = `url(${imageBuffer}) center center/cover`;
	};
};

avatarInput.addEventListener("change", handleUpload);
avatarBtn.addEventListener("keypress", (event) => {
	if (event.key === " " || event.key === "Enter") avatarBtn.click();
});
