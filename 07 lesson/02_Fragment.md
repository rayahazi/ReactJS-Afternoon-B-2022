# Fragment - שבריר

In render method - we must return only 1 element. Therefore if we have more than 1 element - we must wrap it with some elment.

If we use `div`, it may be harder to see the code and debug the DOM. Therefore - we can use `React.Fragment`. - it will not show in the DOM, or empty element.

### 1. React.Fragment

```js
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1></h1>
        <h1></h1>
        <h1></h1>
      </React.Fragment>
    );
  }
}
```

### 1. Empty element

```js
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <h1></h1>
        <h1></h1>
        <h1></h1>
      </>
    );
  }
}
```
