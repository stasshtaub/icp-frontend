import { Modal } from "../components/modal";

const triggers = document.querySelectorAll("[data-video]");

triggers.forEach((trigger) => {
	trigger.addEventListener("click", () => {
		const { video, modalTitle, videoName } = trigger.dataset;

		if (video) {
			showVideoModal(video, modalTitle, videoName);
		}
	});
});

const showVideoModal = (src, modalTitle, videoName) => {
	const modal = new Modal(modalTitle, undefined, true, true, "modal--video");

	const content = `
        <div class="modal__iframe-wrp">
            <div class="loader loader--active loader--transparent"></div>
            <iframe class="modal__iframe" width="560" height="315" src="${ src }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="modal__description">
            <p class="text text--s">${ videoName }</p>
        </div>
    `;

	modal.setContent(content);
	modal.mount();
	modal.showModal();
};
