const img = document.querySelector("img");
const bodyFirst = document.querySelector("body first-child");

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `images/${chosenImg}`;
bgImg.className = "background";
document.body.appendChild(bgImg);
