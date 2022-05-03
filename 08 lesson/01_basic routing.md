# basic routing - V6 (latest version)

### 1. install routing for an existing app:

```
npm i react-router-dom

// or

yarn add react-router-dom
```

### 2. Create screens:

- Create new folder `screens` in `src`
- Create 4 screens:

  - Home
  - About
  - Items
  - ContactUs

- for each screen - add the shortcut : `rfc`.

### 3. Add BroswerRouter to index.js

Allow us to use routing in our app:

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 1. import:
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // Wrap the entire app with BrowserRouter -
  // allow the app to use routing
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
```

### 4. Add MyRouter.js

Define all the links to the navigation in our app.

```js
// This file will contain all links:

import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function MyRouter() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* http://localhost:3000/home */}
            <Link to="/home">Home</Link>
          </li>
          <li>
            {/* http://localhost:3000/about */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* http://localhost:3000/items */}
            <Link to="/items">Items</Link>
          </li>
          <li>
            {/* http://localhost:3000/contactus */}
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </nav>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </div>
  );
}
```

### 5. Import to App.js

```js
import React from "react";
import MyRouter from "./router/MyRouter";

export default function App() {
  return (
    <div className="container">
      <MyRouter />
    </div>
  );
}
```

### 6. Create linked component to each route - index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// 1. import:
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 2. import screens
import App from "./App";
import Home from "./screens/Home";
import About from "./screens/About";
import Items from "./screens/Items";
import ContactUs from "./screens/ContactUs";

ReactDOM.render(
  <BrowserRouter>
    {/* Add array of routes, each route will tell which component to render
  in a certain path */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/items" element={<Items />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
```

### 7. design the navbar in `MyRouter.js`, using bootstrap

```js
// This file will contain all links:

import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function MyRouter() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* http://localhost:3000/home */}
            <Link to="/home" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            {/* http://localhost:3000/about */}
            <Link to="/about" className="nav-link active">
              About
            </Link>
          </li>
          <li className="nav-item">
            {/* http://localhost:3000/items */}
            <Link to="/items" className="nav-link active">
              Items
            </Link>
          </li>
          <li className="nav-item">
            {/* http://localhost:3000/contactus */}
            <Link to="/contactus" className="nav-link active">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </div>
  );
}
```
