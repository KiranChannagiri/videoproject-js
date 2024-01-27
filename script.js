let z4 = document.querySelector(".z4");
let video = document.querySelector(".video")
let circle = document.querySelector(".circle")
z4.addEventListener("click",()=>
{
    z4.classList.toggle("active");
    circle.classList.toggle("translate");
});
var i = 0;
z4.addEventListener("click",()=>
{ 
    if( i === 0)
    {
        video.pause();
        i++;
    }
    else 
    {
        video.play();
        i=0;
    }
});
let preloader = document.querySelector(".preloader");
window.addEventListener("load",()=>
{
    preloader.classList.add("hide-preloader");
});
// The behavior you're observing is due to the closure property in JavaScript. In your code, you declare the variable i outside the event listener and then use it inside the event listener function. Since JavaScript has function-level scope, the event listener function has access to variables declared in the outer scope, and it "closes over" those variables, creating a closure.

// When the event listener is triggered, it captures the current value of i from the outer scope and retains it within the closure. Any changes made to i inside the event listener do not affect the value of i outside the event listener because they are separate instances of the variable.

// var i = 0;

// z4.addEventListener("click", () => {
//     if (i === 0) {
//         video.pause();
//         i++;
//     } else {
//         video.play();
//         i = 0;
//     }
// });

// // The value of `i` here is still 0 because the event listener hasn't been triggered yet.
// When the event listener is triggered, it uses the value of i from its closure:

// If i inside the closure is 0, it pauses the video and increments i inside the closure.
// If i inside the closure is 1, it plays the video and sets i inside the closure to 0.
// However, the value of i outside the event listener remains unchanged because the closure doesn't affect the outer variable directly.

// If you need to access the updated value of i outside the event listener, you can do so after the event has been triggered. For example:

// javascript
// Copy code
// var i = 0;

// z4.addEventListener("click", () => {
//     if (i === 0) {
//         video.pause();
//         i++;
//     } else {
//         video.play();
//         i = 0;
//     }

//     // You can access the updated value of `i` here or outside this event listener.
//     console.log(i);
// });
// The `load` event and the DOMContentLoaded event are both events in JavaScript related to the loading and rendering of web pages, but they are triggered at different times during the page lifecycle.

// 1. **Load Event:**
//    - The `load` event is fired when an entire page, including all its dependent resources such as images, stylesheets, scripts, etc., has finished loading.
//    - It is generally used to perform actions that require the entire page and its resources to be ready, such as manipulating DOM elements or interacting with the fully loaded content.

//    Example:
//    ```javascript
//    window.addEventListener('load', (event) => {
//        // Code to be executed after the entire page has finished loading.
//    });
//    ```

// 2. **DOMContentLoaded Event:**
//    - The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and other external resources to finish loading.
//    - It is often used for actions that need to be performed as soon as the DOM is ready, allowing for faster interaction with the page compared to waiting for the entire page and its resources to load.

//    Example:
//    ```javascript
//    document.addEventListener('DOMContentLoaded', (event) => {
//        // Code to be executed when the DOM is fully loaded (but external resources may still be loading).
//    });
//    ```

// In summary, the `load` event waits for the entire page and its resources to be loaded, while the `DOMContentLoaded` event fires when the DOM is fully parsed and ready, even if external resources are still being loaded. Choosing between them depends on whether you need all external resources to be loaded or if you only need the DOM structure to be ready for manipulation.
// The choice between attaching an event listener to the `window` object or the `document` object depends on the specific behavior you are trying to capture and when you want your script to execute. Here are some general guidelines:

// 1. **`window` object:**
//    - Use the `window` object when you want to capture events related to the entire browser window, including events that occur after the entire page has loaded.
//    - Events like `"load"` and `"unload"` are often attached to the `window` object because they relate to the entire browser window.

//    Example:
//    ```javascript
//    window.addEventListener("load", function () {
//        // Code to be executed after the entire page and its resources have finished loading.
//    });
//    ```

// 2. **`document` object:**
//    - Use the `document` object when you want to capture events related specifically to the HTML document, such as events occurring during the parsing and loading of the document itself.
//    - The `"DOMContentLoaded"` event is commonly attached to the `document` object because it signals that the DOM structure has been fully loaded and parsed, even if external resources like images are still loading.

//    Example:
//    ```javascript
//    document.addEventListener("DOMContentLoaded", function () {
//        // Code to be executed when the DOM is fully loaded (before images and other resources).
//    });
//    ```

// Choosing between `window` and `document` depends on the timing of the events you want to capture. If you need to wait for all resources to be loaded, use the `window` object and the `"load"` event. If you only need the DOM structure to be ready, use the `document` object and the `"DOMContentLoaded"` event.

// In the provided code example (`window.addEventListener("load", ...)`), the "load" event is used because the intention is to wait for all resources, including images and external scripts, to be fully loaded before hiding the preloader.