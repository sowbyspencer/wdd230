/* Creating a variable called requestURL and setting it equal to the JSON file. It is also creating a
variable called cards and setting it equal to the class cards. */
const requestURL = 'scripts/members.json';
const cards = document.querySelector('.cards');

/**
 * It takes the data from the API, filters out the members that are not gold or silver, then randomly
 * selects 3 members from the filtered list and displays them on the page.
 */
async function getMembers(){
  const response = await fetch(requestURL);
  const data = await response.json();
  const members = data.members;
  let primeMembers = members.filter(member => member.membership == "gold" || member.membership == "silver");
  let spotMembers = [];

  for (let i = 0; i < 3; i++){
    rand = Math.floor(Math.random() * primeMembers.length);
    spotMembers.push(primeMembers[rand])
    primeMembers.splice(rand, 1)
  }
  
  spotMembers.forEach(displaySpotlights);
}

/**
 * The function creates a section element, adds the member's name to an h3 element, adds the member's
 * image to an img element, adds the member's tagline to a p element, adds the member's email to an a
 * element, adds the member's phone number to an a element, adds the member's website to an a element,
 * and then adds the section element to the spotlights div element.
 * @param member - an object that contains the member's name, image, tagline, email, phone, and
 * website.
 */
function displaySpotlights(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.class = "spot1"
    let h3 = document.createElement('h3');
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let a3 = document.createElement('a');
    let image = document.createElement('img');
    let p = document.createElement('p');
  
    // Change the textContent property of the h3 element to contain the member's name
    h3.textContent = `${member.name}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `${member.name} logo`);
    image.setAttribute('loading', 'lazy');

    //Tagline
    p.innerText = `${member.tagline}`

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
  
    // Add/append the section(card) with the h3 element
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(p);
    card.appendChild(document.createElement('hr'));
    card.appendChild(a1);
    card.appendChild(a2);
    card.appendChild(a3);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    spot = document.querySelector('#spotlights');
    // console.log(spot);
    spot.appendChild(card);
  }

  
  getMembers()

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