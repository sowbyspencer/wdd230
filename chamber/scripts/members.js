/* Creating a constant variable called requestURL and assigning it the value of the JSON file. It is
also creating a constant variable called cards and assigning it the value of the div with the class
of cards. */
const requestURL = 'scripts/members.json';
const cards = document.querySelector('.cards');

/**
 * The function is called getMembers. It is an asynchronous function that fetches data from the
 * requestURL, then converts the data to JSON, then assigns the data to a variable called members, then
 * loops through the members and calls the function displayMembers for each member.
 */
async function getMembers(){
  const response = await fetch(requestURL);
  const data = await response.json();
  const members = data.members
  members.forEach(displayMembers);
}

/**
 * The function creates elements to add to the document, changes the textContent property of the h2
 * element to contain the member's name, builds the image attributes by using the setAttribute method
 * for the src, alt, and loading attribute values, adds/appends the section(card) with the h2 element,
 * and adds/appends the existing HTML div with the cards class with the section(card).
 * @param member - The member object that contains the member's name, email, phone, website, and image.
 */
function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let a3 = document.createElement('a');
    let image = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the member's name
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

  /* Checking the width of the window and if it is greater than 1200px, it will add the class grid to
  the cards div and remove the class list. */
  if (window.innerWidth > 1200){
    cards.classList.add("grid");
    cards.classList.remove("list");
  }
  getMembers()

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");

  /* Adding an event listener to the gridbutton. When the gridbutton is clicked, it will add the class
  grid to the cards div and remove the class list. */
  gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
  });

  /* Adding an event listener to the listbutton. When the listbutton is clicked, it will add the class
  list to the cards div and remove the class grid. */
  listbutton.addEventListener("click", () => {
    cards.classList.add("list");
	  cards.classList.remove("grid");
  });

  /**
   * It takes a string of numbers and returns a formatted phone number.
   * @param phoneNumberString - The phone number string to be formatted.
   * @returns the phone number in the format (xxx) xxx-xxxx.
   */
  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }