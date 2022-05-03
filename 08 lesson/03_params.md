# params - `:`

## 1. Create dummy-data - an array of coffees:

```js
export const myCoffees = [
  {
    id: 1,
    name: "Espresso",
    img: "https://forexdengi.com/filedata/fetch?id=27779125",
    price: "5.5",
  },
  {
    id: 2,
    name: "Latte",
    img: "https://i.pinimg.com/736x/17/e0/9c/17e09ce2bcd8a29d56e6ba8abde508d9--coffee-culture-brunch.jpg",
    price: "8",
  },
  {
    id: 3,
    name: "Cappuchinno",
    img: "https://i1.wallbox.ru/wallpapers/main2/201725/14978928755948080b1a38d9.12077544.jpg",
    price: "7.5",
  },
];
```

## 2. Add dynamic links in Coffee.js

We define the link according to the coffee name. (loop over the array)

```js
import React from "react";
import { Link, Outlet } from "react-router-dom";
// 1. import the array from dummy-data
import { myCoffees } from "../../dummy-data";

export default function Coffee() {
  return (
    <div>
      <h5>Pick your coffee</h5>

      <nav>
        {/* localhost:3000/items/coffee/espresso */}
        {/* localhost:3000/items/coffee/latte */}
        {/* localhost:3000/items/coffee/cappuchinno */}
        {myCoffees.map((coffee) => (
          <div key={coffee.id}>
            <Link to={`/items/coffee/${coffee.name}`}>{coffee.name}</Link>
          </div>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
```

## 3. index.js - add params route:

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
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
```

## 4. Create `MyCoffee.js`

We will show this component when a user picks the coffee type:

- Get values from params - useParams

```js
import React from "react";
import { useParams } from "react-router-dom";
import { myCoffees } from "../dummy-data";

export default function MyCoffee() {
  // Get all the params from the URL
  let params = useParams();

  // Get the full object for the current param value:
  let myCoffeeChoice = myCoffees.find(
    (coffee) => coffee.name === params.coffeeName
  );

  return (
    <div style={{ marginTop: 10, padding: 10, border: "1px solid black" }}>
      {(myCoffeeChoice != null && (
        <>
          <h6>{myCoffeeChoice.name}</h6>
          <p>price: {myCoffeeChoice.price} Shekel</p>
          <img height={150} src={myCoffeeChoice.img} />
        </>
      )) || <h3>Coffee not found!</h3>}
    </div>
  );
}
```
