// The DOM (Document Object Model) is a very important concept used in web development.
// It is a structured representation created in memory by the browser after parsing an HTML file.
// JavaScript uses this representation to dynamically modify HTML and CSS.

// Now, let's try to understand each aspect of the DOM in detail.

// 1. What is the DOM (Document Object Model)?
//    - When we write an HTML file and the browser loads it, the browser creates an internal representation called the DOM Tree.
// Example:

// <!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <p>This is a paragraph.</p>
    </body>
</html>

// The corresponding DOM Tree:

// Document
// │
// ├── html
// │   ├── head
// │   │   ├── title
// │   │       └── "My Page"
// │   ├── body
// │       ├── h1
// │       │   └── "Hello World"
// │       ├── p
// │           └── "This is a paragraph."

// Important Points:
// - The DOM is a tree structure, where each HTML element is called a "Node".
// - JavaScript does not modify the HTML file directly; instead, it modifies the DOM, which is reflected on the browser screen.
// - The DOM is flexible, allowing us to add, remove, or modify elements dynamically.

// 2. What is the DOM API?
//    - To manipulate the DOM, the browser provides a set of functions and properties known as the DOM API (Application Programming Interface).

// Example:

document.querySelector("h1").innerText = "Welcome to JavaScript!";

// 3. Window and Document Objects

// (A) Window Object:
//     - The window object is the global JavaScript object that represents the browser environment.
//     - Example:

console.log(window);

// Important window properties:
// window.innerHeight, window.innerWidth, window.alert("Hello!"), window.location

// (B) Document Object:
//     - The document object is part of the window and represents the HTML structure of the webpage.

// Example:
console.log(document);

// document.title, document.body, document.head

// 4. Hierarchy of DOM Elements
//    - The DOM follows a tree structure, and every HTML element is called a "node".
//    - Types of Nodes: Element Nodes, Text Nodes, Attribute Nodes

// Example:
<p id="para">This is a paragraph.</p>

// Accessing via JavaScript:
// document.getElementById("para");

// 5. DOM Manipulation Techniques

// (A) Selecting Elements
// By ID:
document.getElementById("para");
// By Class Name:
document.getElementsByClassName("my-class");
// By Tag Name:
document.getElementsByTagName("p");
// By Query Selector:
document.querySelector(".my-class");

document.querySelectorAll(".my-class");

// (B) Changing Content and Properties
// Changing Text:
document.querySelector("h1").innerText = "New Heading!";
// Changing HTML:
document.querySelector("p").innerHTML = "<b>Bold Text</b>";
// Changing Attributes:
document.querySelector("img").src = "new-image.jpg";

// (C) Creating and Adding New Elements
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);

// (D) Removing an Element
document.querySelector("h1").remove();

// 6. Virtual DOM and Performance
// - DOM manipulation is costly because every change causes the page to re-render.
// - The React Virtual DOM helps by optimizing updates.

// Example:
document.getElementById("counter").innerText = count;

// 7. Event Listeners and Interaction

document.querySelector("button").addEventListener("click", function () {
    alert("Button Clicked!");
});

// Conclusion:
// - The DOM is a memory structure inside the browser that represents the HTML page.
// - Using the DOM API, we can select, modify, and delete elements dynamically.
// - The React Virtual DOM improves performance by optimizing updates.
// - Event Listeners help in handling user interactions efficiently.
// */