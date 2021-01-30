{
	const aside = document.querySelector(".news-detail2-card__col--aside");

    if (aside) {
        const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("hidden");
			} else {
				entry.target.classList.add("hidden");
			}
        });
        
		io.observe(aside);
	}
}
