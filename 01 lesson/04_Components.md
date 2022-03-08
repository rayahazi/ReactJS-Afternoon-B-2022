# Components:

Components are independent and reusable bits of code.

- we use components to build a website.
- componenets in reactJS can be created in 2 ways:

  - class
  - function

- When we create component in react - it must start with `uppecase` letter.
  (if not - react will think it is html element).

- any website has:
  - navigation(logo, important routing)
  - header (main header, secondary header)
  - body - content of the page
  - footer - info about the writers, links..

### function component:

```js
export default function Header() {
  return <h1>my website...</h1>;
}
```

### class component:

- a class component must extend `react.Component`
- We wrap the returned function with `render()` function

```js
import react from "react";

class Header extends react.Component {
  render() {
    return <h1>my website...</h1>;
  }
}

export default Header;
```

### Component inside component - call it

```js
import react from "react";

class SubHeader extends react.Component {
  render() {
    return <h4>This is a short description about the website...</h4>;
  }
}

class Header extends react.Component {
  render() {
    return (
      <div>
        <h1>my website...</h1>
        <SubHeader />
      </div>
    );
  }
}

export default Header;
```

## props:

- header.js

```js
import react from "react";

export default function Header(props) {
  return <h1>{props.headerTxt}</h1>;
}
```

- app.js

```js
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header headerTxt="my prop 1" />
      <Header headerTxt="my prop 2" />
      <Header headerTxt="my prop 3" />
      <Header headerTxt="my prop 4" />
      <Header headerTxt="my prop 5" />
    </div>
  );
}

export default App;
```
