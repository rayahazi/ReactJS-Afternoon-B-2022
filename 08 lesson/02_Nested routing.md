# Nested routing:

```
app
    home
    about
    items
        coffee
            espresso
            latte
            capuchinno
        drinks
        salads
    contact-us
```

## 1. keep navbar always on top.

In previous section - when we click on a link - all the other data dissapears. We want to see always on top the navigation.

For that: Nest the routes inside of the App route.

```
-- siblings --
* app
* home
* about

-- children --
* app
    * home
    * about
```

#### index.js

- Insert all the routes inside the main route - App.

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
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
```

## 2. Nesting our routes for items:

create the 3 nested categories for items: coffee, drinks, salads

- Create in screens/categories 3 components of: coffee, drinks, salads

#### in items.js - create all the links:

```js
import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Items() {
  return (
    <div className="container">
      <h2>Our products</h2>

      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <button className="btn btn-primary m-2">
            <Link to="/items/coffee" className="nav-link active">
              Coffee
            </Link>
          </button>
          <button className="btn btn-primary m-2">
            <Link to="/items/drink" className="nav-link active">
              Drinks
            </Link>
          </button>
          <button className="btn btn-primary m-2">
            <Link to="/items/salad" className="nav-link active">
              Salads
            </Link>
          </button>
        </ul>
      </nav>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </div>
  );
}
```

#### Add in index.js the connection to links:

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

// import sub-content
import Coffee from "./screens/categories/Coffee";
import Drink from "./screens/categories/Drink";
import Salad from "./screens/categories/Salad";

ReactDOM.render(
  <BrowserRouter>
    {/* Add array of routes, each route will tell which component to render
  in a certain path */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />}>
          <Route path="/items/coffee" element={<Coffee />} />
          <Route path="/items/drink" element={<Drink />} />
          <Route path="/items/salad" element={<Salad />} />
        </Route>
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
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

// import sub-content
import Coffee from "./screens/categories/Coffee";
import Drink from "./screens/categories/Drink";
import Salad from "./screens/categories/Salad";

ReactDOM.render(
  <BrowserRouter>
    {/* Add array of routes, each route will tell which component to render
  in a certain path */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />}>
          <Route path="/items/coffee" element={<Coffee />} />
          <Route path="/items/drink" element={<Drink />} />
          <Route path="/items/salad" element={<Salad />} />
        </Route>
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
```
