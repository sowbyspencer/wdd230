const d = new Date();
const year = d.getFullYear();
const day = d.getDay();

const yearel = document.querySelector("#year");
yearel.innerHTML = year;

const timestamp = document.querySelector("#timestamp");
timestamp.innerHTML = document.lastModified;



const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);

const datestamp = document.querySelector("#date");
datestamp.innerHTML = fulldateUK;

function toggleMenu() {
    document.querySelector("#primary-nav").classList.toggle("open");
    document.querySelector("#hamburger-btn").classList.toggle("open");
}

const hBtn = document.querySelector("#hamburger-btn");
hBtn.onclick = toggleMenu;



const banner = document.querySelector("#banner");
const bannerBtn = document.getElementById("bannerBtn");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function toggleBanner() {
    banner.classList.toggle("display");
}

bannerBtn.addEventListener("click", function(){
    toggleBanner();
})

// Display banner if it s Monday or Tuesday
if (day === 1 || day === 2){
    toggleBanner();
    // console.log(day); // For console testing
}






// A list of images with the data-src attribute.
let imagesToLoad = document.querySelectorAll("img[data-src]");

// Function to change html for images
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};

// IntersectionObserver options
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
}

// The Intersection Observer controls images showing when in the viewport
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {observer.observe(img);});
}
// If the browser doesn't support Intersection Observer load all the images
else {
    imagesToLoad.forEach((img) => {loadImages(img);});
}






