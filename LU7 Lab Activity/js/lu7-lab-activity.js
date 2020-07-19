// JavaScript source code
var errCtr = 0;

/*
 * Checks if the State input field should be enabled or remain disabled when the user finishes typing in the Country  
 * input field based on if they had written one of the many ways of writting the US
 */
function enableSt() {
    const st = document.querySelector("input[name='st']");
    const ctry = document.querySelector("input[name='ctry']");
    var arrUnSt = ["United States", "US", "USA", "America", "U.S.A.", "U.S."]; // array for different ways the US can be written
    var match = false;  // represents when matches are found (true) or not found (false)

    // Loop that is used to determine if the user had answered that they live in the US
    for (var i = 0; i < arrUnSt.length; i++) {
        if (ctry.value.toUpperCase() == arrUnSt[i].toUpperCase()) { // uses toUpperCase() to make sure what ever was written is in the same case as the array
            st.disabled = false;    // removes the disabled attribute
            st.require = true;  // adds the required attribute
            st.title = "Should be abbreviated"; // sets and adds the tool tip (title) attribute
            match = true;
            i = arrUnSt.length;    // ends the loop as soon as a match is found
        }
    }
    if (!match) {   // if no matches were found while the loop was running
        st.disabled = true; // adds the disabled attribute back in if the attribute was removed
        st.require = false; // removes the required attribute if it's present
        st.removeAttribute("title");    // removes the title attribute if it's present
    }
}

/*
 * Used to put force characters to uppercase when the user finishes typing the state they live in
 */
function uppercase() {
    const st = document.querySelector("input[name='st']");
    const minit = document.querySelector("input[name='minit']");

    st.value = st.value.toUpperCase();  // makes characters uppercase
    minit.value = minit.value.toUpperCase();  
}
document.querySelector("input[name='st']").addEventListener("focusout", uppercase);
document.querySelector("input[name='minit']").addEventListener("focusout", uppercase);

/*
 * Used to call other functions and displays messages depending on if errors were found when the user clicks on the 
 * Submit button
 */
function validation() {
    errCtr = 0; // resets errCtr if not already set to 0

    checkFname();
    checkMinit();
    checkLname();
    checkBday();
    checkAge();
    checkAddr();
    checkCty();
    checkCtry();
    checkSt();
    checkZip();
    checkPnum();
    checkEmail();

    // Determines what message should be displayed based on if any errors were found
    if (errCtr != 0) {  
        alert("Please fix all the errors you made");
    } else {
        alert("The form is now submitted");
    }
}

/*
 * Checks if the first name is valid
 */
function checkFname() {
    const fname = document.querySelector("input[name='fname']");

    if (fname.validity.valueMissing || fname.value.trim().length == 0) {
        alert("No first name was entered");
        errCtr++;
    } else if (fname.validity.patternMismatch) {
        alert("First name should only contain 2 to 25 letters");
        errCtr++;
    }
}

/*
 * Checks if the middile initial is valid
 */
function checkMinit() {
    const minit = document.querySelector("input[name='minit']");

    if (minit.validity.valueMissing || minit.value.trim().length == 0) {
        alert("No middle initial was entered");
        errCtr++;
    } else if (minit.validity.patternMismatch) {
        alert("Middle initial should only contain 1 letter");
        errCtr++;
    }
}

/*
 * Checks if the last name is valid
 */
function checkLname() {
    const lname = document.querySelector("input[name='lname']");

    if (lname.validity.valueMissing || lname.value.trim().length == 0) {
        alert("No last name was entered");
        errCtr++;
    } else {
        if (lname.validity.patternMismatch) {
            alert("Last name should only contain 3 to 25 letters");
            errCtr++;
        }
    }
}

/*
 * Checks if the birthday is valid
 */
function checkBday() {
    const bday = document.querySelector("input[name='bday']");

    if (bday.validity.valueMissing) {   // for dates, will also be missing a value when an incomplete or invalid date is entered
        alert("Birthday was either not entered or is an invalid or incomplete date was entered");
        errCtr++;
    } else if (bday.validity.rangeOverflow) {   // checks if bday is over the maximum value 7/7/2004
        alert("Birthday is over the maximum date 7/7/2004");
        errCtr++;
    } else if (bday.validity.rangeUnderflow) {
        alert("Birthday is under the minimum date 7/7/1920");   // checks if bday is under the minimum value 7/7/1920
        errCtr++;
    }
}

/*
 * Checks if the age is valid
 */
function checkAge() {
    const age = document.querySelector("input[name='age']");
    const bday = document.querySelector("input[name='bday']");  
    var d = new Date(); // gets the current date
    const bdayYr = parseInt(bday.value.substring(0, 4)); // used to get the year entered by the user as an interger
    const bdayMon = parseInt(bday.value.substring(5, 7)); // used to get the month entered by the user as an interger
    const bdayDay = parseInt(bday.value.substring(8, 10));   // used to get the day entered by the user as an interger
    var valAge = 0; // represents what the valid age
    var invalidBday = false;    // determines if bday contains invalid data

    // Checks what the valid age would be based on if bday is valid or not
    if (bday.value != "") {
        if (bdayYr == 2004 && bdayMon < 8 && bdayDay < 8) {
            valAge = d.getFullYear() - bdayYr;
        } else if (bdayYr < 2005) {
            valAge = d.getFullYear() - bdayYr;
        } else {
            invalidBday = true;
        }
    } else {
        invalidBday = true;
    }

    // Checks if age is valid based on if an age was entered by the user
    if (age.value != "") {
        if (age.validity.rangeOverflow) {   // checks if age is over 100
            alert("Age is over the maximum age 100");
            errCtr++;
        } else if (age.validity.rangeUnderflow) {   // checks if age is under 16
            alert("Age is under the minimum age 16");
            errCtr++;
        } else {
            if (!invalidBday) {
                if (age.value != valAge) {   // checks if age is correct based on the value 
                    alert("Age does not match up with the chosen birthday");
                    errCtr++;
                }
            } else {
                alert("Unable to check if age is correct based on the chosen birthday due to birthday being invalid");
                errCtr++;
            }
        }
    }
}

/*
 * Checks if the address is valid
 */
function checkAddr() {
    const addr = document.querySelector("input[name='addr']");

    if (addr.validity.valueMissing || addr.value.trim().length == 0) {
        alert("No address was entered");
        errCtr++;
    } else {
        if (addr.validity.patternMismatch) {
            alert("Address is not in the correct format, it should look something like this: 1 First Avenue");
            errCtr++;
        }
        if (addr.validity.tooLong) {
            alert("Address is too long, it should not exceed 30 characters");
            errCtr++;
        }
    }
}

/*
 * Checks if the city is valid
 */
function checkCty() {
    const cty = document.querySelector("input[name='cty']");

    if (cty.validity.valueMissing || cty.value.trim().length == 0) {
        alert("No city was entered");
        errCtr++;
    } else {
        if (cty.validity.tooLong) {
            alert("City is too long, it should not exceed 20 characters");
            errCtr++;
        }
        if (cty.validity.patternMismatch) {
            alert("City should contain only letters with a space between each word");
            errCtr++;
        }
    }
}

/*
 * Checks if the country is valid
 */
function checkCtry() {
    const ctry = document.querySelector("input[name='ctry']");

    if (ctry.validity.valueMissing || ctry.value.trim().length == 0) {
        alert("No country was entered");
        errCtr++;
    } else {
        if (ctry.validity.tooLong) {
            alert("Country is too long, it should not exceed 20 characters");
            errCtr++;
        }
        if (ctry.validity.patternMismatch) {
            alert("Country should contain only letters with a space between each word");
            errCtr++;
        }
    }
}

/*
 * Checks if the state is valid
 */
function checkSt() {
    const st = document.querySelector("input[name='st']");

    // Checks if state is valid when it is not disabled
    if (!st.disabled) {
        if (st.validity.valueMissing || st.value.trim().length == 0) {
            alert("No state was entered");
            errCtr++;
        } else if (st.validity.patternMismatch) {
            alert("State is in the wrong format, it should look something like this: NY");
            errCtr++;
        } 
    }
}

/*
 * Checks if the zip code is valid
 */
function checkZip() {
    const zip = document.querySelector("input[name='zip']");

    if (zip.validity.valueMissing) {    // trim() not needed since spaces do not affect the length of a zip code
        alert("No zip code was entered");
        errCtr++;
    } else if (zip.validity.rangeOverflow) {    // checks if zip is over 99999
        alert("Zip code is over the maximum zip code 99999");
        errCtr++;
    } else if (zip.validity.rangeUnderflow) {   // checks if zip is under 10000
        alert("Zip code is under the minimum zip code 10000");
        errCtr++;
    }
}

/*
 * Checks if the phone number is valid
 */
function checkPnum() {
    const pnum = document.querySelector("input[name='pnum']");

    // Checks if pnum is valid when a phone number was entered
    if (pnum.value != "") {
        if (pnum.value.trim().length == 0) {
            alert("A phone number cannot be just spaces");
            errCtr++;
        } else if (pnum.validity.patternMismatch) {
            alert("Phone number is in the wrong format, it should look something like this: (123) 456-7890");
            errCtr++;
        }
    }
}

/*
 * Checks if the email is valid
 */
function checkEmail() {
    const email = document.querySelector("input[name='email']");

    // Checks if email is valid when an email address was entered
    if (email.value != "") {
        if (email.value.trim().length == 0) {    // trim() not needed since pattern doesn't have spaces affect the length of characters very much
            alert("An email cannot be just spaces");
            errCtr++;
        } else {
            if (email.validity.tooLong) {
                alert("Email is too long, it shouldn't exceed 30 characters");
                errCtr++;
            } else if (email.validity.tooShort) {
                alert("Email is too short, it shouldn't be below 9 characters");
                errCtr++;
            } else if (email.validity.patternMismatch) {
                alert("Email is in the wrong format, it should look something like this: example@gmail.com");
                errCtr++;
            }
        }
    }
}