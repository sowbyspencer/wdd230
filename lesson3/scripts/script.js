const d = new Date();
const year = d.getFullYear();

const yearel = document.querySelector("#year")
yearel.innerHTML = year

const timestamp = document.querySelector("#timestamp")
timestamp.innerHTML = document.lastModified
