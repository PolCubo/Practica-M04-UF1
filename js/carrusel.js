document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;
    const totalImages = images.length;

    function showNextImage() {
        currentIndex++;

        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 964;
        carouselContainer.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showNextImage, 10000);
});
