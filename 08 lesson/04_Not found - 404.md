# 404 - not found

This route will catch all the routes that do not exist in our app.

- index.js

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

import MyCoffee from "./components/MyCoffee";

ReactDOM.render(
  <BrowserRouter>
    {/* Add array of routes, each route will tell which component to render
  in a certain path */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />}>
          <Route path="/items/coffee" element={<Coffee />}>
            {/* : for params - it will change every time */}
            <Route path=":coffeeName" element={<MyCoffee />} />
          </Route>
          <Route path="/items/drink" element={<Drink />} />
          <Route path="/items/salad" element={<Salad />} />
        </Route>
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
      {/* 404: */}
      <Route
        path="*"
        element={<h3 className="text-center">404 - page not found!</h3>}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
```
