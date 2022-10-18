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
    main.classList.toggle("display");
    footer.classList.toggle("display");
}

bannerBtn.addEventListener("click", function(){
    toggleBanner();
})

// Display banner if it s Monday or Tuesday
if (day === 1 || day === 2){
    toggleBanner();
    console.log(day);
}


