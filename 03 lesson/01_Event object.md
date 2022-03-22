# Event object

The `event` keyword - is SynteticBaseEvent - an object.
We can use it to get elements and change them in our code.

```js
import React, { Component } from "react";

export default class MyEvent extends Component {
  render() {
    return (
      <div>
        <button onClick={(event) => console.log(event)}>Click me</button>
      </div>
    );
  }
}
```

### Change style with event.target:

- event - the entire data about the button
- target - element's type

##### Using `style`

```js
import React, { Component } from "react";

export default class MyEvent extends Component {
  func(event) {
    event.target.style.backgroundColor = "pink";
    event.target.style.color = "white";
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.func(event)}>Click me</button>
      </div>
    );
  }
}
```

##### Using `className` - external CSS file

1. Add 2 classes of style in App.css

```css
.App {
  text-align: center;
}

.startingPoint {
  background-color: rgb(125, 52, 52);
  color: antiquewhite;
}

.afterClick {
  background-color: rgb(60, 191, 171);
  color: rgb(39, 47, 84);
}
```

2. use the classes in JS

```js
import React, { Component } from "react";
// 1. import the css file
import "./App.css";

export default class MyEvent extends Component {

  // In the function - call className attribute - and change the class
  func(event) {
    event.target.className = "afterClick";
  }

  render() {
    return (
      <div>
        {* create header with initial style and add an event that will change it *}
        <h3 onClick={(event) => this.func(event)} className="startingPoint">
          Click me
        </h3>
      </div>
    );
  }
}
```
