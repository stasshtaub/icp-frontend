const video = document.getElementById("video-background");

video.onloadeddata = function () {
    this.classList.add("video-background--loaded");
};