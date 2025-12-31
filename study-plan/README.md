

## 💻 Week 1: Core JavaScript Fundamentals

The goal is to master modern JS syntax (ES6+) and the key differences from Java's structure.

  * **Syntax & Variables:**
      * [x] Understand the difference between **`var`**, **`let`**, and **`const`** (focus on block scoping).
      * [x] the "leak" of `var`: if you declare a variable using var inside any pair of curly braces that is not a function body, that variable will "leak" out into its nearest containing function (or the global scope, if it's not inside any function).
      * [x] Practice **Template Literals** (backticks \`\`) for string interpolation.
      * [x] Define and understand primitive types (`number`, `string`, `boolean`, `null`, `undefined`).
      * [x] `==` v.s. `===`. Avoid `==`, mostly for checking null. The loose equality operator performs type coercion before making the comparison
      * [x] conditions `if`, `else`, `switch`
      * [x] question mark operators: Ternary operator `? with :`, Optional Chaining `?.`, Nullish Coalescing `??`
  * **Functions & Scope:**
      * [X] Write functions using both **Function Declarations** and **Arrow Functions** (`=>`).
      * [x] What is Lexical Scope v.s. Dynamic scope (Bash)
      * [x] Understand the difference in how the **`this`** keyword behaves in arrow functions vs. regular functions. Regular function creates its own `this`, determined by the call side. Arrow function does not have its own `this`, its `this` is from the lexical scope.
      * [x] Define and demonstrate **closures** (a function retaining access to its parent's scope). A closure is a function bundled together with references to its surrounding state (lexical environment). A closure allows an **inner function** to retain access to the scope of its **parent function**, even after the parent function has finished executing and its execution context has been popped off the stack.
  * **Data Structures & Manipulation:**
      * [x] Create objects using **Object Literals** (`{}`).
      * [x] OOP in JavaScript (Abstraction, Encapsulation, Inheritance and Polymorphism)
      * [x] Arrays, Maps, and Sets (accessors, mutators)
      * [x] For loop (index, for in, for of), while loop, do while loop
      * [x] Higher-Order functions (forEach, map, filter, reduce, find, some, every). Set and Map only have `forEach`.  Use the essential array methods: **`.map()`**, **`.filter()`**, and **`.reduce()`**.
      * [x] Use higher-order functions on objects (convert to arrays)
      * [x] Use **Array Destructuring** and **Object Destructuring**.
      * [x] Master the **Spread Operator** (`...`) for cloning arrays/objects/sets/maps and merging.

-----

## ⚡ Week 2: Advanced JS & Asynchronous Programming

The most crucial section to unlearn Java's threading model and embrace Node.js's non-blocking I/O.

  * **OOP & Modules:**
      * [x] Understand **Prototypal Inheritance** (the real mechanism) vs. **ES6 Classes** (the syntactic sugar).
      * [x] Practice **import/export** (ES Modules) and understand the legacy **`require()`/`module.exports`** (CommonJS).
  * **Asynchronous Concepts (Core):**
      * [x] Define the **Event Loop** (The single-threaded nature of JS that handles concurrent operations). https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick 
      * [x] Write a function that returns a **`Promise`** (using `resolve` and `reject`).
      * [x] Consume a promise using the **`.then()`** and **`.catch()`** chain.

  * **Modern Async:**
      * [x] Use the **`async`** keyword to define a function that implicitly returns a Promise.
      * [x] Use the **`await`** keyword inside an `async` function to pause execution until a Promise resolves.
      * [x] Implement **`try...catch`** blocks within `async` functions for robust error handling.

-----

## 🚀 Week 3: Node.js & Express.js Setup

This phase is about setting up the environment and the core web server structure.

  * **Node.js & Environment:**
      * [x] Initialize a new project with **`npm init`** and understand the contents of `package.json`.
      * [x] Install and configure the **Express** framework.
      * [x] Use the **`dotenv`** package to load environment variables (`.env`).
  * **Express Fundamentals:**
      * [x] Define the basic server setup (`const app = express()`, `app.listen()`).
      * [x] Configure the server to use **Body Parsers** (`express.json()`, `express.urlencoded()`).
      * [x] Define a basic **GET** route for the root endpoint (`/`).
  * **Architecture & Middleware:**
      * [x] Refactor route logic into a separate file using **`express.Router()`** (Controller separation).
      * [x] Write and apply a **global middleware function** (e.g., a logger).
      * [x] Understand the `req`, `res`, and `next()` parameters in a middleware function.

-----

## 💾 Week 4: Backend Engineering with SQLite (CRUD)

Integrate your first database and solidify the concept of separation of concerns (similar to Spring's MVC/Service/Repo layers).

  * **Data Access Layer (Repository):**
      * [x] Install a minimal SQLite driver (`sqlite3`). Create a table, insert data and select data.
      * [x] Install **Prisma** and required dependencies. Configure ESM Support
      * [x] Initialize Prisma ORM and create a Prisma sqlite database
      * [x] Define your data model `User` and `Post`. Create and apply the Prisma migration
      * [x] Instantiate prisma client. Install npm install @prisma/adapter-libsql @libsql/client when using ESM module format, to connect to sqlite, because by default an adaptor is not provided. Then `import { PrismaLibSql } from '@prisma/adapter-libsql'`
      * [x] write the a query to create a new user and their posts. Then Fetch all users with their posts
      * [x] Create a dedicated **repository file** (`UserRepository.js`) for database operations.
      * [x] Write an `async` function to initialize/connect to the **SQLite file**.
  * **CRUD Implementation:**
      * [x] Implement a **`CREATE`** function (e.g., `saveUser(data)`) in the repository.
      * [x] Implement a **`READ`** function (e.g., `findAllUsers()` and `findUserById(id)`).
      * [x] Create corresponding **POST** and **GET** routes in Express to call these functions.
      * [x] Ensure all repository methods handle and propagate **database errors** using `try...catch`.
  * **RESTful Practice:**
    * [x] Implement a **PUT/PATCH** route for updates and a **DELETE** route.

-----
## ✅ Week 5: Productionize the API
  * **Request Validation**
    * [x] Schema Definition: Learn to define data shapes using a library like Zod (recommended for TypeScript/Modern JS) or Joi.
    * [x] Middleware Integration: Create a reusable function that takes a schema and validates req.body, req.params, or req.query.
    * [x] Error Mapping: Learn how to format validation errors so they return a clean, readable JSON object to the frontend (e.g., { "field": "email", "error": "Invalid format" }).
    * [x] Sanitization: Practice stripping out unknown fields that aren't in your schema to prevent "over-posting" attacks.
  * **Pagination**
    * [ ] Query Parameters: Learn how to extract page and limit (or size) from req.query (e.g., /products?page=2&limit=10).
    * [ ] Offset vs. Keyset (Cursor) Pagination: Offset: Understand LIMIT and OFFSET in SQL (easy to implement, slower on large datasets). Keyset/Cursor: Learn how to fetch "the next 10 items after ID X" (better for infinite scrolls).
    * [ ] Mathematical Logic: Master the formula for calculating the offset: offset=(page−1)×limit
    * [ ] Response Metadata: Practice returning a structured object that includes totalItems, totalPages, currentPage, and the data array.
    * [ ] Validation: Ensure your validation middleware (Zod/Joi) forces page and limit to be positive integers.
  * **Global Exception Handling**
    * [ ] Custom Error Classes: Learn to extend the built-in Error class to create AppError or HttpError classes that include a statusCode.
    * [ ] Async Wrapper/Handler: Understand why try/catch is needed in async Express routes and how to write a catchAsync utility to eliminate boilerplate.
    * [ ] Error Middleware: Master the (err, req, res, next) signature and ensure it is the last piece of middleware in your app.js.
    * [ ] Environment Logic: Implement logic to show "Stack Traces" in development but hide them in production.
  * **Logging & Request Correlation**
    * [ ] Winston/Pino Setup: Configure a logger that outputs JSON (for machines) in production and pretty-text (for humans) in development.
    * [ ] The Correlation ID: Use the uuid package to generate a requestId for every incoming request.
    * [ ] Async Context (Advanced): Research AsyncLocalStorage in Node.js to see how to access the requestId in your Service layer without passing it through every function argument.
    * [ ] Log Levels: Learn when to use .info(), .warn(), .error(), and .debug() correctly. 
  * **OAuth2**
    * [ ] Grant Types: Understand the difference between the Authorization Code Flow (for web apps) and Client Credentials Flow (for machine-to-machine).
    * [ ] The Handshake: Learn the "Redirect to Provider" vs. "Callback" flow.
    * [ ] Passport.js Strategies: Practice setting up passport-google-oauth20 or passport-github2.
    * [ ] JWT Integration: Learn how to issue a JWT after the OAuth handshake is successful so the user stays logged in.
    * [ ] Security Best Practices: Research state parameters (to prevent CSRF) and PKCE (Proof Key for Code Exchange).
-----

## ✅ Week 6: Testing (Unit & Integration)

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

## 🛡️ Week 7: TypeScript Transition

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
