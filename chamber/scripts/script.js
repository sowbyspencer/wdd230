const d = new Date();
const year = d.getFullYear();

const yearel = document.querySelector("#year")
yearel.innerHTML = year

const timestamp = document.querySelector("#timestamp")
timestamp.innerHTML = document.lastModified



const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);

const datestamp =document.querySelector("#date")
datestamp.innerHTML = fulldateUK

function toggleMenu() {
    document.querySelector("#primary-nav").classList.toggle("open")
    document.querySelector("#hamburger-btn").classList.toggle("open")
}

const hBtn = document.querySelector("#hamburger-btn")
hBtn.onclick = toggleMenu;