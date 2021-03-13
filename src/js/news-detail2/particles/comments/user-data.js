import { saveFileToLocalStorage } from "../../../helpers/saveFileToLocalStorage";
import { render } from "./avatar";

const keys = ["name", "email"];

/**
 *
 * @param {FormData} fd
 */
export const save = (fd) => {
	keys.forEach((key) => {
		localStorage.setItem(key, fd.get(key));
	});

	const avatar = fd.get("avatar");
	if (avatar) {
		saveFileToLocalStorage(avatar, "avatar", "data:image/png;base64,");
	}
};

/**
 *
 * @param {HTMLFormElement} form
 */
export const init = (form) => {
	keys.forEach((key) => {
		const value = localStorage[key];

		if (value) {
			const input = form.querySelector(`[name='${key}']`);
			input.value = value;
		}
	});

	const { avatar } = localStorage;
	if (avatar) {
		render(avatar);
	}
};
