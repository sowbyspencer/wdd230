//The example of using JSON

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets(){
  const response = await fetch(requestURL);
  const data = await response.json();
  const prophets = data.prophets
  prophets.forEach(displayProphets);
}

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    p1.innerHTML = `Date of Birth: ${prophet.birthdate}`
    p2.innerHTML = `Place of Birth: ${prophet.birthplace}`
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1)
    card.appendChild(p2)
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  getProphets()