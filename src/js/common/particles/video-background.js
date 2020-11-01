const video = document.getElementById("video-background");

if (video) {
	video.onloadeddata = function () {
		this.classList.add("video-background--loaded");
	};
}
