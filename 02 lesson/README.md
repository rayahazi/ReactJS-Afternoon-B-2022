# Class component

We can create components in reactJS in 2 ways:
(It is exacly the same to the compiler)

1. function (regular, anonymous, arrow)
2. class

### A class must have:

1. extend from `React.Component` class.
2. The function `render()` - that returns all the HTML code

### Create a class

- Create new file `EncryptMSG.js` (starts with uppercase)
- write `rcc` (react class component) shortcut

```js
// rcc - react class component

import React, { Component } from "react";

export default class EncryptMSG extends Component {
  render() {
    return <div>EncryptMSG</div>;
  }
}
```

## Props - data sent from parent class / function

1. We define props in the constructor
2. They must be sent to `super()` function
3. To call a prop - we must use the prefix `this.`

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
      </div>
    );
  }
}
```

- In App.js

```js
import "./App.css";
import EncryptMSG from "./EncryptMSG";

function App() {
  return (
    <div className="App">
      <EncryptMSG header="Encrypt my secret" />
    </div>
  );
}

export default App;
```

## state - internal data

- We use state to store our values in class component
- in class - `state`. in function - `useState()`
- Every time the state changes - react re-renders the component to the browser.
- Changes in state - can happen:
  - user action
  - change in component
- The state object is initialized in the constructor
- To update values in the state object - we must use `this.setState()`. (cannot update the state explicitly).
- The function `this.setState()` - merges between the previous data and the new data.

##### Create and show state:

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Jon Doe",
      password: "12345678",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>

        <p>
          <b>UserName: </b> {this.state.userName}{" "}
        </p>
        <p>
          <b>password: </b> {this.state.password}{" "}
        </p>
      </div>
    );
  }
}
```

##### Update state:

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "John", password: "12345678" };
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <p>
          <b>password: </b> {this.state.password}{" "}
        </p>
        <button onClick={() => this.setState({ password: Math.random() + 1 })}>
          Change password
        </button>
      </div>
    );
  }
}
```

- Use external function:

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "John", password: "12345678" };
  }

  updatePass = () => this.setState({ password: Math.random() + 1 });

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <p>
          <b>password: </b> {this.state.password}{" "}
        </p>
        <button onClick={() => this.updatePass()}>Change password</button>
      </div>
    );
  }
}
```

### Call function in the right way:

- If we call the function in the event this way - it will run the function automatically - and will cause an error

```js
<button onClick={this.updatePass()}>Change password</button>
```

- The right way is:
  We must define a scope for the function to run - only when user - presses the button

```js
<button onClick={() => this.updatePass()}>Change password</button>
```

## props vs state:

- **props** - we get from parent component, **state** - are in the class iteself. (internal data).
- **props** - are immutable(cannot be changed), **state** - are mutable
- **props** -are used in both function & class component , **state** - is only used in a class component. (in function - we use `useState` hook instead)
