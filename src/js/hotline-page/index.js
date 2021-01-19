const tracks = document.querySelectorAll(".marquee__track");

tracks.forEach((track) => {
    const { children } = track.cloneNode(true);
    
	if (children) {
		track.append(...children);
	}
});