
/* Getting the timestamp from the document and putting it in the footer. */
const timestamp = document.querySelector("#timestamp");
timestamp.innerHTML = document.lastModified;



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