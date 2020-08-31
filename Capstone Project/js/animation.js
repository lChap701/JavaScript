/* Based on https://www.w3schools.com/howto/howto_js_animate.asp */

/*
 * Displays the animation when the page is loaded 
 */
window.onload = function moveToRight() {
    var mouse = document.getElementById("animated");
    var pos = 0;
    var interval = setInterval(firstFrames, 1);
    // Used to show that first frames of the animation
    function firstFrames() {
        if (pos == 1200) {
            clearInterval(interval);
            console.log("The first frames of the animation has been finished");
            interval = setInterval(lastFrames, 1);
        } else {
            pos++;  // moves the mouse to the right
            mouse.style.top = '0';
            mouse.style.left = pos + 'px';
        }
    }
    // Used to show that last frames of the animation
    function lastFrames() {        
        if (pos == 0) {
            clearInterval(interval);
            console.log("The last frames of the animation has been finished");
            interval = setInterval(firstFrames, 1); // loops the animation
        } else {
            pos--;  // moves the mouse to the left
            mouse.style.top = '0';
            mouse.style.left = pos + 'px';
        }
        
    }
}