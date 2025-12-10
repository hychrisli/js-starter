

## 💻 Week 1: Core JavaScript Fundamentals

The goal is to master modern JS syntax (ES6+) and the key differences from Java's structure.

  * **Syntax & Variables:**
      * [x] Understand the difference between **`var`**, **`let`**, and **`const`** (focus on block scoping).
      * [x] Practice **Template Literals** (backticks \`\`) for string interpolation.
      * [x] Define and understand primitive types (`number`, `string`, `boolean`, `null`, `undefined`).
      * [x] `==` v.s. `===`. Avoid `==`, mostly for checking null. The loose equality operator performs type coercion before making the comparison
      * [x] conditions `if`, `else`, `switch`
  * **Functions & Scope:**
      * [ ] Write functions using both **Function Declarations** and **Arrow Functions** (`=>`).
      * [ ] Understand the difference in how the **`this`** keyword behaves in arrow functions vs. regular functions.
      * [ ] Define and demonstrate **closures** (a function retaining access to its parent's scope).
  * **Data Structures & Manipulation:**
      * [ ] Create objects using **Object Literals** (`{}`).
      * [ ] Arrays, Maps, and Sets
      * [ ] For loop, while loop, Foreach
      * [ ] Use **Array Destructuring** and **Object Destructuring**.
      * [ ] Master the **Spread Operator** (`...`) for cloning arrays/objects and merging.
      * [ ] Use the essential array methods: **`.map()`**, **`.filter()`**, and **`.reduce()`**.


-----

## ⚡ Week 2: Advanced JS & Asynchronous Programming

The most crucial section to unlearn Java's threading model and embrace Node.js's non-blocking I/O.

  * **OOP & Modules:**
      * [ ] Understand **Prototypal Inheritance** (the real mechanism) vs. **ES6 Classes** (the syntactic sugar).
      * [ ] Practice **import/export** (ES Modules) and understand the legacy **`require()`/`module.exports`** (CommonJS).
  * **Asynchronous Concepts (Core):**
      * [ ] Define the **Event Loop** (The single-threaded nature of JS that handles concurrent operations).

[Image of Node.js event loop diagram]

```
* [ ] Write a function that returns a **`Promise`** (using `resolve` and `reject`).
* [ ] Consume a promise using the **`.then()`** and **`.catch()`** chain.
```

  * **Modern Async:**
      * [ ] Use the **`async`** keyword to define a function that implicitly returns a Promise.
      * [ ] Use the **`await`** keyword inside an `async` function to pause execution until a Promise resolves.
      * [ ] Implement **`try...catch`** blocks within `async` functions for robust error handling.

-----

## 🚀 Week 3: Node.js & Express.js Setup

This phase is about setting up the environment and the core web server structure.

  * **Node.js & Environment:**
      * [ ] Initialize a new project with **`npm init`** and understand the contents of `package.json`.
      * [ ] Install and configure the **Express** framework.
      * [ ] Use the **`dotenv`** package to load environment variables (`.env`).
  * **Express Fundamentals:**
      * [ ] Define the basic server setup (`const app = express()`, `app.listen()`).
      * [ ] Configure the server to use **Body Parsers** (`express.json()`, `express.urlencoded()`).
      * [ ] Define a basic **GET** route for the root endpoint (`/`).
  * **Architecture & Middleware:**
      * [ ] Refactor route logic into a separate file using **`express.Router()`** (Controller separation).
      * [ ] Write and apply a **global middleware function** (e.g., a logger).
      * [ ] Understand the `req`, `res`, and `next()` parameters in a middleware function.

-----

## 💾 Week 4: Backend Engineering with SQLite (CRUD)

Integrate your first database and solidify the concept of separation of concerns (similar to Spring's MVC/Service/Repo layers).

  * **Data Access Layer (Repository):**
      * [ ] Install a minimal SQLite driver (`sqlite3`) or an ORM like **Sequelize/Prisma**.
      * [ ] Create a dedicated **repository file** (`UserRepository.js`) for all database operations.
      * [ ] Write an `async` function to initialize/connect to the **SQLite file**.
  * **CRUD Implementation:**
      * [ ] Implement a **`CREATE`** function (e.g., `saveUser(data)`) in the repository.
      * [ ] Implement a **`READ`** function (e.g., `findAllUsers()` and `findUserById(id)`).
      * [ ] Create corresponding **POST** and **GET** routes in Express to call these functions.
      * [ ] Ensure all repository methods handle and propagate **database errors** using `try...catch`.
  * **RESTful Practice:**
      * [ ] Implement a **PUT/PATCH** route for updates and a **DELETE** route.

-----

## ✅ Week 5: Testing (Unit & Integration)

Focus on making your code testable and establishing a testing workflow using **Jest** and **Supertest**.

  * **Setup & Unit Testing:**
      * [ ] Install **Jest** as a development dependency.
      * [ ] Create a simple test file (`.test.js`) and run your first test using **`expect()`** and **`toBe()`**.
      * [ ] Practice the **AAA pattern** (Arrange, Act, Assert) for test structuring.
      * [ ] Write **Unit Tests** for a pure utility function (no external dependencies).
  * **Mocking Dependencies:**
      * [ ] Learn to use **`jest.mock()`** to simulate external module behavior.
      * [ ] Write **Unit Tests** for your Repository layer, **mocking** the actual database connection to isolate the logic.
  * **Integration Testing:**
      * [ ] Install **Supertest** to simulate HTTP requests against your Express app.
      * [ ] Write an **Integration Test** that calls a `GET /api/users` route and asserts the HTTP status code (200) and response format.
      * [ ] Write an **Integration Test** for a **POST** route, asserting the 201 status code and verifying the mock call was made correctly.

-----

## 🛡️ Week 6: TypeScript Transition

Bringing type safety back into your backend projects, similar to your Java experience.

  * **Setup & Configuration:**
      * [ ] Install **`typescript`** and the Node types (`@types/node`) as dev dependencies.
      * [ ] Generate and configure **`tsconfig.json`** (set `allowJs: true` initially).
      * [ ] Convert the **main server file** from `.js` to **`.ts`**.
  * **Typing Fundamentals:**
      * [ ] Define your data structure using an **`interface`** (e.g., `User` interface).
      * [ ] Use **`type`** aliases for primitive combinations (e.g., `type ID = string | number`).
      * [ ] Explicitly type all function parameters and return values.
      * [ ] Learn **Union Types** (`string | null`) and **Optional Properties** (`?`).
  * **TypeScript Integration:**
      * [ ] Type your Express route handlers, specifically the `req` and `res` objects, to enforce data shapes.
      * [ ] Refactor your **Unit Tests** to be written in TypeScript (`.test.ts`).
      * [ ] Use **Enums** to model a set of related constants (e.g., user roles).
