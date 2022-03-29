# Lists & Keys

We will usually use the `map()` function to loop over array.

### map(callbackfn: (value: number, index: number))

map(callbackfn: (value: number, index: number)) - Calls a defined callback function on each element of an array, and returns an array that contains the results.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  // map(callbackfn: (value: number, index: number) ) -  Calls a defined callback function on each element of an array,
  // and returns an array that contains the results.
  func() {
    let arr = [1, 2, 3, 4, 5];
    let doubledArr = arr.map((num) => num * 5); // [5, 10, 15, 20, 25]
    console.log(doubledArr);
  }

  render() {
    return <div className="container">{this.func()}</div>;
  }
}
```

## Using map() - with keys:

- Create the array in the state object
- call the array directly from the return() function.
- each value in the array will be presented in a paragraph
- key - each node in the array must have a unique key. We can use the index for it.
- We add the key to the element of HTML.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
      arr: [1, 2, 3, 4, 5],
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.arr.map((num, index) => (
          <p key={index}>
            index: {index}. value: {num * 5}
          </p>
        ))}
      </div>
    );
  }
}
```

- Output:

```
index: 0. value: 5

index: 1. value: 10

index: 2. value: 15

index: 3. value: 20

index: 4. value: 25
```
