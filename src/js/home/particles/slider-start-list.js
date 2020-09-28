const init = () => {
	const container = document.querySelector(".home__start-list");
	const slider = tns({
		container,
		navContainer: ".home__start-list-dots",
		controls: false,

		responsive: {
			700: {
				disable: true,
			},
		},
	});
};

export default init;
