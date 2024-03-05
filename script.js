const slides = [
    "blackswan-icon.jpg",
    "sparkle-icon.jpg",
    "acheron-icon.jpg",
    "aventurine-icon.jpg",
    "sunday-icon.jpg",
    "robin-icon.jpg",
    "kafka-icon.jpg"
];

const slideshowContainer = document.getElementById("slideshow-container");

slides.forEach((slide) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "slideshow fade";
    const img = document.createElement("img");
    img.className = "char-icon";
    img.alt = slide.split("-")[0]; // Assuming the file names follow the format charactername-icon.jpg
    img.src = "assets/" + slide;
    slideDiv.appendChild(img);
    slideshowContainer.appendChild(slideDiv);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    clearInterval(slideshowInterval);
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slideshow");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    slideshowInterval = setInterval(() => {
        plusSlides(1);
    }, 3000);
}