const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

/**
 * 
 */
button.addEventListener('click', function(){
    // first make sure the input is not blank
    if (input.value == ""){
        console.log("The input cannot be empty!");
    }
    else{
        // create an li element
        const liElement = document.createElement("li");

        // create a delete button
        const deleteBtnElement = document.createElement("button");

        //populate the li elements textContent or innerHTML with the input
        liElement.textContent = input.value;

        //populate the button textContent with an ❌
        deleteBtnElement.textContent = "❌";
        deleteBtnElement.ariaLabel = "Remove " + input.value; // Set aria label

        // append the li element with the delete button
        liElement.append(deleteBtnElement);

        // append the list element with the li element just created and appended with text and the delete button
        list.append(liElement);

        // add an event listener to the delete button that removes the li element when clicked
        deleteBtnElement.addEventListener('click', function(){
            list.removeChild(liElement);
        })

        // send the focus to the input element
        input.focus();

        // clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
        input.value = "";

    }
})