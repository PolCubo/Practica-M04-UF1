document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * 100; // Se mueve en porcentaje
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, 6000); // Cambia cada 6 segundos
});
