# `bind` keyword

We have many ways to call a function:

## 1. call directly without `()`

It will work fine!

- disadvantage: we cannot send parameters

```js
import React, { Component } from "react";
import "./App.css";

export default class MyEvent extends Component {
  myFunc() {
    alert("Hello");
  }

  render() {
    return (
      <div>
        <button onClick={this.myFunc}>Click me</button>
      </div>
    );
  }
}
```

## 2. call with `()` -> Error

This will cause a problem - the function is being called first, without pressing the button

```js
<button onClick={this.myFunc()}>Click me</button>
```

## 3. Call inside another function

This is the best solution

1. it will call the function only when we need
2. we can send parameters

```js
<button onClick={() => this.myFunc()}>Click me</button>
```

## 4. bind - another solution

It gives the same result as `3`.
it will link the parameters to the function without activating it

- always the first parameter in the function will be `this`

```js
<button onClick={this.myFunc.bind(this)}>Click me</button>
```

## Send parameters

```js
import React, { Component } from "react";
import "./App.css";

export default class MyEvent extends Component {
  myFunc(age) {
    alert(`Your age is: ${age}`);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.myFunc(12)}>arrow function</button>
        <button onClick={this.myFunc.bind(this, 12)}>using bind</button>
      </div>
    );
  }
}
```
