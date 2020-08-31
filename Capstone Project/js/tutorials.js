/*
 * Based on https://www.w3schools.com/howto/howto_css_modals.asp
 */
var tutModal = document.getElementById("tutModal");
var span = document.getElementsByClassName("close")[0];
var activator = document.getElementsByClassName("activator");
var tutLinks = document.getElementsByClassName("tutLink");

/* 
 * Used to display the modal when an activator is clicked
 */
function displayTutorials() {
    tutModal.style.visibility = "visible";
    tutModal.style.opacity = "1";
    console.log("The modal was opened");
}
// Loop for adding the click event to all activators 
for (let i = 0; i < activator.length; i++) {
    activator[i].addEventListener("click", displayTutorials);
}

/*
 * Used to close the modal when the user clicks on <span> (x) or any of the tutorial links
 */
function hideTutorials() {
    tutModal.style.visibility = "hidden";
    tutModal.style.opacity = "0";
    console.log("The modal was closed");
}
span.addEventListener("click", hideTutorials);

/*
 * Closes any accordions that are open when the user clicks on a tutorial link
 */
function closeAccordions() {
    // Makes any active accordion inactive
    const acc = document.getElementsByClassName("accordion");
    const panel = document.getElementsByClassName("panel");
    for (let i = 0; i < panel.length; i++) {
        if (panel[i].style.display === "block") {
            panel[i].style.display = "none";
            acc[i].classList.toggle("active");
        }
    }
    console.log("All accordions have been closed");
}
// Loop for adding the click event to all tutorial links for the hideTutorials() and closeAccordions() functions
for (let i = 0; i < tutLinks.length; i++) {
    tutLinks[i].addEventListener("click", hideTutorials);
    tutLinks[i].addEventListener("click", closeAccordions);
}

/*
 * Used to close the modal when the user clicks anywhere outside of the modal
 */
window.onclick = function (event) {
    // Checks if the user had clicked outside the modal
    if (event.target == tutModal) {
        tutModal.style.visibility = "hidden";
        tutModal.style.opacity = "0";
        console.log("The modal was closed");
    }
}