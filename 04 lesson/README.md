# Lists and keys

- List - any array. `[]`
- in react - any value in the list must have a unique key (for manipulation - edit, delete etc..)

## map(callbackfn: (value: number, index?: number))

Calls a defined callback function on each element of an array, and returns an array that contains the results.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // map(callbackfn: (value: number, index: number))
  // Calls a defined callback function on each element of an array,
  // and returns an array that contains the results.
  func() {
    let arr = [1, 2, 3, 4, 5];
    let doubledArr = arr.map((num) => num * 5);
    console.log(doubledArr);
  }

  render() {
    return <div className="container">{this.func()}</div>;
  }
}
```

## Keys

- Create the array in the state object
- call the array directly from the return() function.
- each value in the array will be presented in a paragraph in the browser.
- Key - each node in the array must have a unique key. We can use the index for it.
- We add the key attribute to the element of HTML .

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4, 5],
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.arr.map((num, index) => (
          <p key={index}>
            index = {index}, value = {num * 5}
          </p>
        ))}
      </div>
    );
  }
}
```

- output:

```
index = 0, value = 5

index = 1, value = 10

index = 2, value = 15

index = 3, value = 20

index = 4, value = 25
```
