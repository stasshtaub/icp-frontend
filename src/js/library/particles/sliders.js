import { init } from "../../components/inline-slider";

const sliders = document.querySelectorAll(".inline-slider");

sliders.forEach((wrapper) => {
	init(wrapper);
});
