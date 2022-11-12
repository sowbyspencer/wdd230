//The example of using JSON

const requestURL = 'scripts/members.json';
const cards = document.querySelector('.cards');

async function getMembers(){
  const response = await fetch(requestURL);
  const data = await response.json();
  const members = data.members
  members.forEach(displayMembers);
}

function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let a3 = document.createElement('a');
    let image = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the member's full name
    h2.textContent = `${member.name}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `${member.name} logo`);
    image.setAttribute('loading', 'lazy');

    //Email
    a1.href = `mailto:${member.email}`;
    a1.target = `_blank`;
    a1.innerText = `${member.email}`

    //Phone
    a2.href = `tel:${member.phone}`
    
    a2.innerText = `${formatPhoneNumber(member.phone)}`

    //Website
    a3.href =`http://${member.website}`
    a3.target = `_blank`;
    a3.innerText = `${member.website}`
  
    // Add/append the section(card) with the h2 element
    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(a1)
    card.appendChild(a2)
    card.appendChild(a3)
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  if (window.innerWidth > 1200){
    cards.classList.add("grid");
    cards.classList.remove("list");
  }
  getMembers()

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");

  gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
  });

  listbutton.addEventListener("click", () => {
    cards.classList.add("list");
	  cards.classList.remove("grid");
  });

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }