var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        // Checks what should be active (have an "active" class) and closes inactive accordions
        const currAcc = document.getElementsByClassName("accordion active");
        for (i = 0; i < currAcc.length; i++) {
            if (currAcc[i] !== this) {
                currAcc[i].classList.toggle("active");

                var panel = document.getElementsByClassName("panel");
                for (i = 0; i < panel.length; i++) {
                    if (panel[i] != this.nextElementSibling) {
                        if (panel[i].style.display === "block") {
                            panel[i].style.display = "none";
                        }
                    }
                }
            }
        }
    });
}