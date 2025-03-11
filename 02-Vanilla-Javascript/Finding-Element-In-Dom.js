// # Finding Element In DOM

// ## **Finding Elements in the DOM**

// JavaScript's DOM API allows us to select HTML elements.

// ### **Ways to Select Elements from the DOM**

// Whenever you want to select an element in JavaScript, you can do so in multiple ways:

// ### **1. By ID (getElementById)**

// - If an element has an ID, you can select it directly using `document.getElementById("id-name")`.
// - If the ID does not exist in the HTML, it will return `null`.

// ### **2. By Class (getElementsByClassName)**

// - To select elements with a specific class, use `document.getElementsByClassName("class-name")`.
// - This returns a **live collection**, meaning if the DOM updates, this collection will automatically update.

// ### **3. By Name Attribute (getElementsByName)**

// - This is mostly used for form elements, like selecting input fields or radio buttons by their `name` attribute.

// ### **4. By Tag Name (getElementsByTagName)**

// - To select elements by their tag (`<p>`, `<div>`, `<img>`, etc.), use `document.getElementsByTagName("tag-name")`.

// ### **5. By CSS Selector (querySelector & querySelectorAll)**

// - `querySelector("selector")` – Returns the first matching element.
// - `querySelectorAll("selector")` – Returns all matching elements (**static collection**, does not update dynamically).

// ## **Difference Between Live and Static Collections**

// ### **Live Collection (getElementsByClassName, getElementsByTagName)**

// - If the DOM dynamically changes, this collection will also update.
// - **Example:** If you select elements using `getElementsByClassName("important")` and later add a new element with the same class, it will also be included in the collection.

// ### **Static Collection (querySelectorAll)**

// - This collection is just a snapshot taken at the time of selection, and it does not update later.

// ## **Difference in Looping**

// - The collection returned by `querySelectorAll` supports `forEach`, `map`, `filter`, etc.
// - The collections from `getElementsByClassName` and `getElementsByTagName` do not support `forEach` directly. You need to convert them into an array using `Array.from()`.


let items = document.getElementsByClassName("important");
// items.forEach() will not work

let itemsArray = Array.from(items);
itemsArray.forEach(item => console.log(item));

// ## **What Can You Do with a Selected DOM Element?**

// Once you have selected an element, you can:

// - **Modify attributes** → (`setAttribute`, `getAttribute`)
// - **Change CSS properties** → (`element.style.property = "value"`)
// - **Add event listeners** → (`addEventListener`)
// - **Add/remove/move child elements** → (`appendChild`, `removeChild`)
// - **Change text or HTML content** → (`innerHTML`, `textContent`)