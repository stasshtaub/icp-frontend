const totalSlidesView = document.querySelector(".strengths__counter-total");
const curSlideView = document.querySelector(".strengths__counter-curr");

const updateCounter = ({ index, slideCount }) => {
	if (index > slideCount) {
		curSlideView.textContent = 1;
	} else if (index === 0) {
		curSlideView.textContent = slideCount;
	} else {
		curSlideView.textContent = index;
	}
};

const init = () => {
	const container = document.querySelector(".strengths__slides");
	const slider = tns({
		container,
		prevButton: ".strengths__btn--prev",
        nextButton: ".strengths__btn--next",
		navContainer: ".strengths__dots",
		onInit: ({ slideCount }) => {
			totalSlidesView.textContent = slideCount;
		},
	});
	slider.events.on("indexChanged", updateCounter);
};

export default init;
