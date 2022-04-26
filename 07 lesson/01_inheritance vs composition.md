# Inheritance vs composition in react

- inheritance - הורשה - class B gets all the properties & methods of class A

```ts
class A {}
class B extends A {}
```

- real example - תפוח הוא תת קטגוריה של פרי

```ts
class Fruit {}
class Apple extends Fruit {}
```

- composition - הכלה - class B has a property of type class A.

```ts
class A {}
class B {
  myValue: A;
}
```

- real example - ברכב יש מנוע

```ts
class Engine {}
class Car {
  myEngine: Engine = new Engine();
}
```

### In react

In react - we do not need to use inheritance.

1. There is only 1 inheritance we can use for a class - and we must use it for the build-in class `Component`.
2. When we want to bring another class - we will use composition for it.

We can use class multiple times in composition.

```js
import React, { Component } from "react";
import Example from "./Example";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Example />
        <Example />
        <Example />
      </div>
    );
  }
}
```

### We can send 2 types of values from `App` to `Example`:

- props - any value sent from inside the component name
- children - for that we will use 2 tags - open& close tags. Inside them - we can add HTML elements

```js
import React, { Component } from "react";
import Example from "./Example";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        {/* 1. send values using props */}
        <Example name="John" />
        <Example name="Alex" />
        {/* 2. send values using children */}
        <Example>
          <h2 style={{ color: "cadetblue" }}>I am a child value</h2>
        </Example>
      </div>
    );
  }
}
```

- Example:

```js
import React, { Component } from "react";

export default class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.name && <h2>my name is {this.props.name}</h2>}
        {this.props.children}
      </div>
    );
  }
}
```
