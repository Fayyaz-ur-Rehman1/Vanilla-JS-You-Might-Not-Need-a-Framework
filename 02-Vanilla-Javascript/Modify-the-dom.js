// # Modify the DOM

// ## 1. Changing Attributes of a DOM Element

// When we want to change an attribute or property of a DOM element, we use dot notation (`.`).

// ### Important Points:

// - **HTML attributes and JavaScript properties are different things.**
// - In most cases, their names are the same, but there are some exceptions:
//     - `class` attribute (HTML) → In JavaScript, it is `className`.
//     - `for` attribute (HTML) → In JavaScript, it is `htmlFor`.

// ## 2. Changing CSS Styles

// Every DOM element has a `style` object, which allows us to modify CSS properties.

// ### How to write CSS properties in JavaScript:

// | CSS Property | JavaScript Equivalent |
// | --- | --- |
// | `font-size` | `element.style.fontSize = "20px"` |
// | `border-right-color` | `element.style.borderRightColor = "red"` |

// JavaScript does not use hyphens (`-`), so properties are written in **camelCase** format.

// ## 3. Adding Event Listeners

// If we want to add an event listener to a DOM element, such as `click`, `mouseover`, etc., we use the `addEventListener` method.

// ### Example:


let button = document.querySelector("button");
button.addEventListener("click", function () {
    alert("Button clicked!");
});


// Arrow functions can also be used:

button.addEventListener("click", () => {
    alert("Button clicked with arrow function!");
});

// ## 4. Changing Inner Text and HTML Content

// If we want to change the text or HTML inside an element, we use `textContent` and `innerHTML`.

// | Method | Functionality |
// | --- | --- |
// | `textContent` | Changes only text; HTML will not work. |
// | `innerHTML` | Can set HTML content as well. |

// ### Example:


let para = document.querySelector("#myPara");
para.textContent = "<b>Hello</b>";  // Treats HTML as text.
// Output: <b>Hello</b> as plain text

para.innerHTML = "<b>Hello</b>";  // Renders the HTML.
// Output: Hello (bold text)

// ## 5. Creating DOM Elements Dynamically

// If we want to create new elements dynamically, we use `document.createElement`.

// ### Example:

let newHeading = document.createElement("h1"); // Creates an H1 element
newHeading.textContent = "This is a new heading";
document.body.appendChild(newHeading); // Adds it to the body

// To add a paragraph:

let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
document.body.appendChild(newPara);


// ## 6. Difference Between `innerHTML` and `createElement`

// | Method | Advantage | Disadvantage |
// | --- | --- | --- |
// | `innerHTML` | Simple and quickly adds HTML content. | Security risk (XSS attack) is possible. |
// | `createElement` | More secure and easier to manipulate. | Requires more code to implement. |

// ## Conclusion

// - You can change properties using dot notation.
// - CSS properties should be written in **camelCase** format.
// - `addEventListener` is used to attach event listeners.
// - `textContent` changes only text, while `innerHTML` supports HTML.
// - `createElement` allows creating new elements dynamically.