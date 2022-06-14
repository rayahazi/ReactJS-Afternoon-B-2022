# Updating

The second step - is updating.

- When variable is changed - what happens?

The render method - is a must, and will always run after an update.

##### React has 5 built-in methods for update (in that order):

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

## 1. getDerivedStateFromProps()

same as in mounting. Rarely used. This is a static method that gets props & states. It will update the state using props.

## 2. shouldComponentUpdate()

This method will return boolean value of true/false. (The default is true)

- If true - will update the component
- Else - will not update the component.

```js
import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "https://pp.userapi.com/c850332/v850332020/165690/mGX_azDWUP4.jpg",
      show: true,
    };
  }

  // Called to determine whether the change in props and state should trigger a re-render.
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return false;
  }

  updateShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    console.log("in render");

    return (
      <div className="container">
        <br />
        <button onClick={() => this.updateShow()} className="btn btn-primary">
          toggle image
        </button>
        {this.state.show && <img src={this.state.img} height={300} />}
      </div>
    );
  }
}

// Mounting: constructor, render
// Updating: shouldComponentUpdate, render
```

## 4. getSnapshotBeforeUpdate() 5. componentDidUpdate()

getSnapshotBeforeUpdate() - store the previous value in state & props.
It must come with componentDidUpdate() method.

componentDidUpdate() - it is the final metohd for updating. We can send the final value,
the data to database.

```js
import React, { Component } from "react";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { myCity: "Jerusalem" };
  }

  // belong to mounting
  // Will update the myCity variable after 1 second
  componentDidMount() {
    setTimeout(() => this.setState({ myCity: "Ariel" }), 10000);
  }

  // store the previous value in state:
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById(
      "div1"
    ).innerHTML = `My city was: ${prevState.myCity}`;
  }

  // must come with getSnapshotBeforeUpdate
  componentDidUpdate() {
    document.getElementById(
      "div2"
    ).innerHTML = `My city is: ${this.state.myCity}`;
  }

  render() {
    return (
      <div>
        <h2>I live in {this.state.myCity}</h2>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
```

