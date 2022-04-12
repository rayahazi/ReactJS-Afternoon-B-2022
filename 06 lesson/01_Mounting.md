# Mounting - הרכבה

Mounting - putting elements in the DOM. First stage.

We have 4 mthods for mounting in react class, in that oreder:

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

The render() method is a must!

- Order of runing:

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("In constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("In getDerivedStateFromProps");
  }

  componentDidMount() {
    console.log("In componentDidMount");
  }

  render() {
    console.log("In render");
    return <div>App</div>;
  }
}
```

## 1. constructor() - בנאי

- constructor() is the first method to run for a component.
- We can init 2 values in ctor:
  - props (outer data)
  - state (inner data)
- in ctor we define states using `this.state`. (only in ctor).
  Outside the ctor - we will update the state only using `this.setState()`

```js
  // in ctor we can define: props, state and method binding:
  constructor(props){
    // props are sent to the super class (Component)
    super(props)

    // state is an object of key-value pairs
    this.state = {
      name: 'John'
    }
  }
```

## 2. getderivedStateFromProps()

This method is called second. before render() method. Rarely used.

- Update the state from props

```js
import React, { Component } from "react";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.myName !== state.name) state.name = props.myName;
    return state.name;
  }

  render() {
    return <h2>My name is : {this.state.name}</h2>;
  }
}
```

- App.js

```js
import React, { Component } from "react";
import Example from "./Example";

export default class App extends Component {
  render() {
    return (
      <div>
        <Example myName="Alex" />
      </div>
    );
  }
}
```

## render()

Is the only must method in react class. It returns the HTML elements to the DOM.

- in render - we must change the state only using `setState()`

```js
<button onClick={() => this.state.name = 'Alex'}>Not working</button>
<button onClick={() => this.setState({name: 'alex'})}>Working</button>
```

```js
render() {
    return (
      <div>
       <h1>Hello world</h1>
      </div>
    )
  }
```

## componentDidMount()

This is the last method for mounting.

- componentDidMount() is good for fetching data - from database / API. It will run only once.

- other functions - can run multiple times - and when we want to get data from db or API there is not need to call more than 1 time.

- in that method - we can use `async - await`.

```js
import React, { Component } from "react";
import Example from "./Example";

export default class App extends Component {
  // 1.
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  // 2.
  render() {
    return (
      <div>
        {(this.state.isWin && <h3 className="alert alert-success">WIN</h3>) || (
          <h3 className="alert alert-danger">LOSE</h3>
        )}
      </div>
    );
  }

  // 3.
  componentDidMount() {
    this.setState({ isWin: false });
  }
}
```

### fetch data from jsonplaceholder:

```js
import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.state.users &&
          this.state.users.map((user) => (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <p>Phone number: {user.phone}</p>
            </div>
          ))}
      </div>
    );
  }

  async componentDidMount() {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      this.setState({ users: await result.json() });
    } catch (error) {
      console.log(error);
    }
  }
}
```

### Access nasa API:

```js
// Go to nasa api, and show the APOD (Astronomy picture of the day)

import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        {this.state.imgOfTheDay && (
          <div>
            <p>current date: {this.state.imgOfTheDay.date}</p>
            <h3>{this.state.imgOfTheDay.title}</h3>
            <img src={this.state.imgOfTheDay.url} height={300} />
            <p>{this.state.imgOfTheDay.explanation}</p>
          </div>
        )}
      </div>
    );
  }

  async componentDidMount() {
    try {
      const result = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      );
      this.setState({ imgOfTheDay: await result.json() });
      console.log(this.state.imgOfTheDay);
    } catch (error) {
      console.log(error);
    }
  }
}
```
