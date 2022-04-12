# Unmounting - פירוק

Remove components / elements from the DOM.

- React has only 1 built-in method for unmounting.

## ComponentWillUnmount()

Will run before a component is removed.

- App.js

```js
import React, { Component } from "react";
import Example from "./Example";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <div className="container">
        {this.state.show && <Example />}

        <button
          className="btn btn-danger"
          onClick={() => this.setState({ show: false })}
        >
          Remove component
        </button>
      </div>
    );
  }
}
```

- Example.js

```js
import React, { Component } from "react";

export default class Example extends Component {
  componentWillUnmount() {
    alert("Removed Example...");
  }

  render() {
    return (
      <div>
        <h2>Hello I am Example</h2>
      </div>
    );
  }
}
```
