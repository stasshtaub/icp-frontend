const avatarImg = document.querySelector(".comments-form__avatar-img");
const avatarInput = document.querySelector(".comments-form__avatar-input");
const avatarBtn = document.querySelector(".comments-form__avatar-label");

const handleUpload = (event) => {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.readAsDataURL(file);
	reader.onloadend = () => {
		render(reader.result);
	};
};

avatarInput.addEventListener("change", handleUpload);
avatarBtn.addEventListener("keypress", (event) => {
	if (event.key === " " || event.key === "Enter") avatarBtn.click();
});

export const render = (imageBuffer) => {
	avatarImg.style.background = `url(${imageBuffer}) center center/cover`;
};
