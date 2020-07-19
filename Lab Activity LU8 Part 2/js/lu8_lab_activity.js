// JavaScript Source Code
const form = document.getElementById("myForm");

/*
 * Allows for multiple options to be selected
 * The function is called when the page is loaded
 */
window.onload = function selectMultiple() {
    document.getElementById("clubs").multiple = true;   // enables the multiple attriute
    document.getElementsByTagName("option")[0].selected = true; // sets the default value to the first option
}

/*
 * Used to submit the form and display a message that indicates that the form has been submitted
 * Called when the Submit button is pressed
 */
function submitForm() {
    var values = "";

    // Checks if the first two fields (the first name and last name) have a value
    if (form.elements[0].value != "") { // if the first name field contains a value 
         values += "First Name: " + form.elements[0].value + "\n";  // \n represents the start of a new line 
    } else {
        values += "First Name: Unknown\n";
    }
    if (form.elements[1].value != "") {// if the last name field contains a value
        values += "Last Name: " + form.elements[1].value + "\n";
    } else {
        values += "Last Name: Unknown\n";
    }

    var selected = getSelectedItems();  // gets the items that were selected and puts it in the selected array

    for (var i = 0; i < selected.length; i++) {
        // Determines how the club should be concatenated to the values variable
        if (selected.length - 1 != 0) { // if the length of the selected array has multiple elements
            if (i != Math.max(selected.length - 1)) { // if i is not the max value i can be for this array
                if (i == 0) {   // if i is equal to the first index of the array
                    values += "Clubs: " + selected[i] + ", ";
                } else {
                    values += selected[i] + ", ";
                }
            } else {
                values += selected[i] + "\n";
            }
        } else {
            values += "Clubs: " + selected[i] + "\n";
        }
    }

    form.submit();  // submits the form
    alert(form.name + " was submitted! \nHere is a list of all the values in the form:\n" + values);
}

/*
 * Gets the selected items in the multiselect dropdown menu when the form is submitted
 * Based on https://www.techiedelight.com/get-selected-values-multi-select-dropdown-javascript/
 */
function getSelectedItems() {
    var chosen = new Array();

    // Loop that gets each option in the clubs dropdown menu and checks if they were selected
    for (var option of document.getElementById("clubs").options) {
        // Checks if the option was selected, if it is then its add to the chosen array
        if (option.selected) {
            chosen.push(option.value);
        }
    }

    return chosen;  // returns the values stored in the array to store it in another array
}

/*
 * Used to reset the form and display a message that indicates that the form has been cleared
 * Called when the Refresh button is pressed
 */
function resetForm() {
    form.reset();   // resets the form
    alert(form.name + " has been cleared!");
}