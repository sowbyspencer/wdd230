const userVisitEl = document.querySelector("#user-visit")

let lastVisit = Number(window.localStorage.getItem("last-visit"))

if (lastVisit !== 0){
    let diff = (Date.now() - lastVisit) / (1000*60*60*24)
    userVisitEl.textContent = `It has been: ` + Math.round(diff) + ` Days since you last visited.`
} else{
    userVisitEl.textContent = `This is your first visit.`
}

localStorage.setItem("last-visit", Date.now())