
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "download.jpg"
];
let index = 0;
const bannerImage = document.getElementById('bannerImage');

function showImage() {
    try {
        console.log("Changing image...");
        bannerImage.src = "images/" + images[index];
        index = (index + 1) % images.length;
    } catch (error) {
        console.error("Error:", error);
    }
}

setInterval(showImage, 2000);