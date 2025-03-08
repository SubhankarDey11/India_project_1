// script.js

// Image gallery logic
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image-gallery img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('visible'));
        images[index].classList.add('visible');
    }

    // Show the first image initially
    showImage(currentIndex);

    // Cycle through images every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);
});
