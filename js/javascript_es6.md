## Quick ECMAScript 6 (ES6) Guide for Beginners

### 1. Variables: var, let, and const

- var: Function-scoped, can be redeclared and updated.
- let: Block-scoped, can be updated but not redeclared in the same scope.
  (only was you can redifined, creo haha)
- const: Block-scoped, cannot be updated or redeclared. Ensures immutability for primitive values.

```javascript
var x = 10;
let y = 20;
const z = 30;

function example() {
  var x = 1;
  if (true) {
    let y = 2;
    const z = 3;
    console.log(x, y, z); // 1, 2, 3
  }
  console.log(x, y, z); // 1, 20, 30
}
```

### 2. Functions:

- Function Declaration: Hoisted, available before definition.
- Function Expression: Not hoisted, defined within an expression.
- Arrow Functions: Shorter syntax, no `this` binding.

```javascript
// Function Declaration
function greet() {
  return "Hello!";
}

// Function Expression
const greet = function () {
  return "Hello!";
};

// Arrow Function
const greet = () => "Hello!";
```

### 3. Classes:

ES6 introduces classes for object-oriented programming.

- Class Declaration: Creates a class with constructor and methods.
- Class Expression: Similar to function expressions.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

const person = new Person("Alice");
console.log(person.greet()); // Hello, Alice!
```

### 4. Useful ES6 Features for Web Applications:

- Template Literals: Embed expressions within strings using backticks.
- Destructuring Assignment: Extract values from arrays or objects.
- Modules: Import and export modules for modular code.

```javascript
// Template Literals
const name = "Alice";
const greeting = `Hello, ${name}!`;

// Destructuring Assignment
const [a, b] = [1, 2];
const { name, age } = { name: "Alice", age: 25 };

// Modules
// person.js
export class Person {
  /* ... */
}
// main.js
import { Person } from "./person.js";
```

### 5. Understanding the `...` (Spread and Rest) Syntax in JavaScript

The `...` syntax in JavaScript is known as the spread/rest operator. It has two primary uses: spreading elements and gathering elements.

**1. Spread Operator:** The spread operator allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

- **Arrays:**

  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log(arr2); // [1, 2, 3, 4, 5]
  ```

- **Objects:**

  ```javascript
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };
  console.log(obj2); // { a: 1, b: 2, c: 3 }
  ```

- **Function Calls:**

  ```javascript
  const arr = [1, 2, 3];
  Math.max(...arr); // Equivalent to Math.max(1, 2, 3)
  ```

**2. Rest Operator:** The rest operator allows you to represent an indefinite number of elements as an array.

- **Function Parameters:**

  ```javascript
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4)); // 10
  ```

- **Object Destructuring:**

  ```javascript
  const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
  console.log(rest); // { c: 3, d: 4 }
  ```

**3. Examples:**

**Spread in Arrays:**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

**Rest in Functions:**

```javascript
function logAll(...args) {
  console.log(args);
}
logAll(1, 2, 3); // [1, 2, 3]
```

**Additional Resources:**

- [MDN Web Docs - Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Web Docs - Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

### 6. HTTP Requests:

- Fetch API: Simplified way to make network requests.

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### 7. History API:

Manage browser history for single-page applications (SPA).

- pushState: Add an entry to the history stack.
- replaceState: Replace the current history entry.

```javascript
// Push State
history.pushState({ page: 1 }, "title 1", "?page=1");

// Replace State
history.replaceState({ page: 2 }, "title 2", "?page=2");

// Handle Popstate
window.onpopstate = function (event) {
  console.log(
    "location: " +
      document.location +
      ", state: " +
      JSON.stringify(event.state),
  );
};
```

### 8. Async

- Asynchronous Programming:

Asynchronous programming allows web applications to handle multiple tasks concurrently without blocking the main thread. This is essential for improving performance and responsiveness, especially during network requests or heavy computations.

- Promises:

Promises are a way to handle asynchronous operations. They represent a value that may be available now, in the future, or never.

Creating a Promise:

```javascript
const promise = new Promise((resolve, reject) => {
  // asynchronous operation
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

Resolving a Promise

```javascript
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

- Async/Await:

Async/await is a syntactic sugar built on top of promises, making asynchronous code look synchronous. It improves readability and maintainability.

Defining an async function

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

#### Example

Fetching Data Asynchronously:

Combining promises, async/await, and the Fetch API for handling HTTP requests.

```javascript
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getData("https://api.example.com/data");
```

#### Summary

- Promises: Manage asynchronous operations with then and catch.
- Async/Await: Syntactic sugar for promises, making code more readable.
- Fetch API: Performs network requests, commonly used with promises and async/await.
