/* The code is checking to see if the user has visited the site before. If they have, it will
display the number of days since their last visit. If they haven't, it will display a message saying
that this is their first visit. */
const userVisitEl = document.querySelector("#user-visit")

let lastVisit = Number(window.localStorage.getItem("last-visit"))

if (lastVisit !== 0){
    let diff = (Date.now() - lastVisit) / (1000*60*60*24)
    userVisitEl.textContent = `It has been: ` + Math.round(diff) + ` Days since you last visited.`
} else{
    userVisitEl.textContent = `This is your first visit.`
}

localStorage.setItem("last-visit", Date.now())