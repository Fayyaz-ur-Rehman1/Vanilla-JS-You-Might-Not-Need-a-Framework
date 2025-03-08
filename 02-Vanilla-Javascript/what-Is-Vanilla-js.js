// What is Vanilla JavaScript?
// Vanilla JavaScript means using pure JavaScript without any external library or framework. It is a way to build web applications using direct browser APIs and JavaScript.

//  Example: Simple Counter App in Vanilla JS
// Let's create a small counter app using Vanilla JS. This will be a simple button that increases the count on every click.

// <h1>Simple Counter</h1>
// <p>Count: <span id="count">0</span></p>
// <button id="increment">Increase</button>

// <script>
let count = 0; // Counter variable
const countDisplay = document.getElementById("count");
const button = document.getElementById("increment");

button.addEventListener("click", function () {
    count++; // Increase count
    countDisplay.textContent = count; // Update UI
});
// </script>

// Diagram:
// This diagram shows how Vanilla JavaScript updates the counter when the button is clicked:

// +-------------+      Button Click      +----------------+
// |  HTML Page  |  ------------------>  |  JavaScript    |
// +-------------+                        |  count++       |
//       |                                +----------------+
//       |                                           |
//       V                                           V
// +----------------+                    +--------------------+
// | User Sees UI  |  <----- Update ----  |  Updated Count UI |
// +----------------+                    +--------------------+

//   ------------------------------------------------------------------------------------------------------

// Compare with React
// If we write the same example using React.js, the code would look like this:

import { useState } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Simple Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default CounterApp;

// Here, React's useState hook is used, which adds extra abstraction. However, in Vanilla JavaScript, the same functionality can be achieved without any library.


// Conclusion
// Vanilla JS is fast because it works directly with the browser’s API.
// No extra dependencies – No need to download any framework or library.
// Perfect for micro apps – It’s the best approach for small applications.
// If you rely only on frameworks, learning Vanilla JS is important!