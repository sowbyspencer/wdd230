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