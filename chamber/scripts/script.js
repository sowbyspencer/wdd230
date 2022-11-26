/* This is getting the current date and time and displaying it on the page. */
const d = new Date();
const year = d.getFullYear();
const day = d.getDay();

const yearel = document.querySelector("#year");
yearel.innerHTML = year;

const timestamp = document.querySelector("#timestamp");
timestamp.innerHTML = document.lastModified;


/* This is getting the current date and time and displaying it on the page. */
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);

const datestamp = document.querySelector("#date");
datestamp.innerHTML = fulldateUK;















/**
 * When the user clicks the hamburger button, toggle the open class on the primary-nav and
 * hamburger-btn elements.
 */
function toggleMenu() {
    document.querySelector("#primary-nav").classList.toggle("open");
    document.querySelector("#hamburger-btn").classList.toggle("open");
}

/* This is adding an event listener to the hamburger button. When the button is clicked it will run the
toggleMenu function. */
const hBtn = document.querySelector("#hamburger-btn");
hBtn.onclick = toggleMenu;















/* This is getting the banner and the banner button from the HTML. */
const banner = document.querySelector("#banner");
const bannerBtn = document.getElementById("bannerBtn");


/* If the banner has the class of display, remove it. If it doesn't, add it. */
function toggleBanner() {
    banner.classList.toggle("display");
}

/* This is adding an event listener to the banner button. When the button is clicked it will run the
toggleBanner function. */
bannerBtn.addEventListener("click", function(){
    toggleBanner();
})

/* This is checking the day of the week and if it is Monday or Tuesday it will display the banner. */
if (day === 1 || day === 2){
    toggleBanner();
}















/* This code is using the Intersection Observer API to load images when they are in the viewport. */
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