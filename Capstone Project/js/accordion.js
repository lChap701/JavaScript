/*
 * Taken from https://www.w3schools.com/howto/howto_js_accordion.asp
 */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
        this.classList.toggle("active");
        console.log("An active class has been toggle");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
            window.scrollTo(0, document.body.scrollHeight); // scrolls to the bottom of the page when the panel is displayed
        }
    });
}