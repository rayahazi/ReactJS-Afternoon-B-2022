# Conditional rendering

We use it when we want to choose if we want to show an element / component to the browser.

- if-else will have to be inside a function (not directly in HTML)

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: false,
    };
  }

  render() {
    let gameState = () => {
      if (this.state.isWin) return <h3 className="alert alert-success">WIN</h3>;
      else return <h3 className="alert alert-danger">LOSE</h3>;
    };

    return <div className="container">{gameState()}</div>;
  }
}
```

## Switch-case

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: false,
    };
  }

  render() {
    let gameState = () => {
      switch (this.state.isWin) {
        case true:
          return <h3 className="alert alert-success">WIN</h3>;
        default:
          return <h3 className="alert alert-danger">LOSE</h3>;
      }
    };

    return <div className="container">{gameState()}</div>;
  }
}
```

## short if

- Short if can be written directly in the HTML code.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: false,
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.isWin ? (
          <h3 className="alert alert-success">WIN</h3>
        ) : (
          <h3 className="alert alert-danger">LOSE</h3>
        )}
      </div>
    );
  }
}
```

## Use operators : `&&` and `||`

We can use the operators `&&` and `||` in a very similar way to `if-else`(short if).

- && operator - true + true
- || operator - true + false

our condition:

- (true/false) && true || true

> anything that isn't `false` - is true.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  render() {
    return (
      <div className="container">
        {/* 
        use operators: && ||
        && - true + true
        || - true + false

        (true/false) && true || true

        * true && true (no continue to ||)
        * false || true
        
        */}

        {(this.state.isWin && <h3 className="alert alert-success">WIN</h3>) || (
          <h3 className="alert alert-danger">LOSE</h3>
        )}
      </div>
    );
  }
}
```
