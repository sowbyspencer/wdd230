/**
 * This section adds the fruit options from the fruit.json file to the dropdown menus
 */

/* Creating a constant variable called requestURL and assigning it the value of the JSON file. */
const requestURL = "scripts/fruit.json";
/* Creating a constant variable called selectElems and assigning it the value of all the select elements. */
const selectElems = document.querySelectorAll("select");

let fruits = "";

getFruit();

/**
 * The function gets the JSON file from the server, assigns it to the variable fruit, and loops through
 * the JSON file and adds each fruit to the select element.
 */
async function getFruit() {
  /* Fetching the JSON file from the server. */
  const response = await fetch(requestURL);

  /* Assigning the JSON file to the variable fruit. */
  fruits = await response.json();

  /* Looping through the JSON file and adding each fruit to the select element. */
  fruits.forEach(addFruitOption);
}

/**
 * The function loops through the select elements and adds a new option element to each select element.
 * @param fruit - The fruit object that is being passed in.
 */
function addFruitOption(fruit) {
  for (i = 0; i < selectElems.length; i++) {
    /* Creating a new option element. */
    let fruitOption = document.createElement("option");

    /* Assigning the value of the fruit to the value, textContent, and accessKey of the option element. */
    fruitOption.value = `${fruit.name}`;
    fruitOption.textContent = `${fruit.name}`;
    fruitOption.accessKey = `${fruit.name}`;

    /* Adding the fruitOption to the select element. */
    selectElems[i].appendChild(fruitOption);
  }
}
















/* Creating a constant variable called subBtn and assigning it the value of the submit button. */
const subBtn = document.querySelector("#submit");
/* Assigning the submitForm function to the onclick event of the submit button. */
subBtn.onclick = submitForm;

function submitForm() {

  /* Getting the form element with the id of drink-form. */
  const drinkForm = document.querySelector("#drink-form");

  if (drinkForm.checkValidity()) {

    /* Creating a constant variable called responseSection and assigning it the value of the element
    with the id of response. */
    const responseSection = document.querySelector("#response");

    /* Getting the value of the specialtyDrinkCount from the local storage and adding 1 to it. */
    let specialtyDrinkCount = Number(window.localStorage.getItem("specialtyDrinkCount"));
    specialtyDrinkCount += 1;

    /* Setting the class name of the response section to hidden and then setting the inner HTML of the
    response section to the specialty drink count. */
    responseSection.className = "hidden";
    responseSection.innerHTML = `<h3>Specialty Drink #${specialtyDrinkCount}</h3>`;

    /* Creating a new paragraph element and assigning it the value of the first name and last name
    inputs. */
    const name = document.createElement("p");
    name.textContent = `Name: ${document.querySelector("#fname").value} ${document.querySelector("#lname").value}`;
    responseSection.appendChild(name);

    /* Creating a new paragraph element and assigning it the value of the email input. */
    const email = document.createElement("p");
    email.textContent = `Email: ${document.querySelector("#email").value}`;
    responseSection.appendChild(email);

    /* Creating a new paragraph element and assigning it the value of the phone number input. */
    const phone = document.createElement("p");
    let phoneNumber = document.querySelector("#tel").value
    phone.textContent = `Phone: ${formatPhoneNumber(phoneNumber)}`;
    responseSection.appendChild(phone);

    /* Creating a new unordered list element and assigning it the value of the selected fruits. */
    const selectedFruits = document.createElement("ul");
    selectedFruits.innerHTML = `<p>Selected fruits</p>`;

    /* Creating a list of the selected fruits. */
    /* Creating a new list item element and assigning it the value of the first fruit selected. */
    const selectedFruit1 = document.createElement("li");
    const fruit1 = document.querySelector("#fruit1");
    selectedFruit1.textContent = fruit1.value;
    selectedFruits.appendChild(selectedFruit1);

    /* Creating a new list item element and assigning it the value of the second fruit selected. */
    const selectedFruit2 = document.createElement("li");
    const fruit2 = document.querySelector("#fruit2");
    if (fruit2.value !== "") {
      selectedFruit2.textContent = fruit2.value;
      selectedFruits.appendChild(selectedFruit2);
    }

    /* Creating a new list item element and assigning it the value of the third fruit selected. */
    const selectedFruit3 = document.createElement("li");
    const fruit3 = document.querySelector("#fruit3");
    if (fruit3.value !== "") {
      selectedFruit3.textContent = fruit3.value;
      selectedFruits.appendChild(selectedFruit3);
    }

    /* Adding the selectedFruits element to the responseSection element. */
    responseSection.appendChild(selectedFruits);

    /* Creating two new paragraph elements and assigning them the value of the special instructions
    input. */
    const specialInstructionsHeader = document.createElement("p");
    const specialInstructions = document.createElement("p");
    specialInstructionsHeader.textContent = `Instructions:`;
    specialInstructions.textContent = `${document.querySelector("#special-instructions").value}`;
    responseSection.appendChild(specialInstructionsHeader);
    responseSection.appendChild(specialInstructions);

    /* Creating a new paragraph element and assigning it the value of the current date. */
    const da = new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"});
    const orderDate = document.createElement("p");
    orderDate.textContent = `Order Date: ${da}`;
    responseSection.appendChild(orderDate);






    // Nutrition Facts
    /* Creating a new unordered list element and assigning it the value of the nutrition facts. */
    const nutritionFacts = document.createElement("ul");
    nutritionFacts.innerHTML = `<p>Nutrition Facts</p>`;

    /* Creating a new list item element for each of the nutrition facts. */
    const carbsEl = document.createElement("li");
    const proteinEl = document.createElement("li");
    const fatEl = document.createElement("li");
    const sugarEl = document.createElement("li");
    const caloriesEl = document.createElement("li");

    /* Setting the variables to 0. */
    let carbs = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;

    /* Looping through the fruits array. */
    for (i = 0; i < fruits.length; i++) {
      /* Checking to see if the value of the first fruit selected is equal to the name of the fruit in
      the JSON file. If it is, then it adds the nutrition facts of the fruit to the variables. */
      if (fruit1.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }

      /* Checking to see if the value of the second fruit selected is equal to the name of the fruit in
      the JSON file. If it is, then it adds the nutrition facts of the fruit to the variables. */
      if (fruit2.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }

      /* Checking to see if the value of the third fruit selected is equal to the name of the fruit in
      the JSON file. If it is, then it adds the nutrition facts of the fruit to the variables. */
      if (fruit3.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }
    }


    /* Setting the text content of the elements to the value of the variable and rounding to one decimal point. */
    carbsEl.textContent = `Carbohydrates: ${Math.round(carbs * 10) / 10}`;
    proteinEl.textContent = `Protein: ${Math.round(protein * 10) / 10}`;
    fatEl.textContent = `Fat: ${Math.round(fat * 10) / 10}`;
    sugarEl.textContent = `Sugar: ${Math.round(sugar * 10) / 10}`;
    caloriesEl.textContent = `Calories: ${Math.round(calories * 10) / 10}`;

    /* Adding the list items to the unordered list. */
    nutritionFacts.appendChild(carbsEl);
    nutritionFacts.appendChild(proteinEl);
    nutritionFacts.appendChild(fatEl);
    nutritionFacts.appendChild(sugarEl);
    nutritionFacts.appendChild(caloriesEl);

    /* Adding the nutrition facts to the response section. */
    responseSection.appendChild(nutritionFacts);

    /* Clearing the text area. */
    document.querySelector("#special-instructions").value = "";

    /* Setting the class name of the response section to visible. */
    responseSection.className = "visible";

    /* Changing the value of the submit button to "Submit Another Drink". */
    document.querySelector("#submit").value = "Sumbit Another Drink";

    /* It scrolls the page to the response section. */
    responseSection.scrollIntoView();

    /* Setting the value of the specialtyDrinkCount in the local storage to the value of the
    specialtyDrinkCount variable. */
    localStorage.setItem("specialtyDrinkCount", specialtyDrinkCount);
  }
}

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

