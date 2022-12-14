/* Getting the timestamp from the document and putting it in the footer. */
const timestamp = document.querySelector("#timestamp");
timestamp.innerHTML = document.lastModified;

/* This is adding an event listener to the hamburger button. When the button is clicked it will run the
toggleMenu function. */
const hBtn = document.querySelector("#hamburger-btn");
hBtn.onclick = toggleMenu;

/**
 * When the user clicks the hamburger button, toggle the open class on the primary-nav and
 * hamburger-btn elements.
 */
function toggleMenu() {
    document.querySelector("#primary-nav").classList.toggle("open");
    document.querySelector("#hamburger-btn").classList.toggle("open");
}



/* This is checking to see if the page is the index page. If it is, then it will run the code inside
the if statement. */
if (document.URL.substring(document.URL.length - 10) == "index.html") {
    
    /* Getting the value from the local storage and putting it into the variable. */
    let specialtyDrinkCount = Number(window.localStorage.getItem("specialtyDrinkCount"));

    /* Creating a paragraph element and then adding text to it. */
    const pEl = document.createElement("p");
    pEl.innerHTML = `You have submitted <strong>${specialtyDrinkCount}</strong> Specialty Drinks`;

    /* Getting the element with the id of specialty and then appending the pEl to it. */
    const specialtySection = document.querySelector("#specialty");
    specialtySection.appendChild(pEl);
}