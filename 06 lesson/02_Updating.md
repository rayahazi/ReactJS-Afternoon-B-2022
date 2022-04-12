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

## 4. getSnapshotBeforeUpdate() & 5. componentDidUpdate()

- getSnapshotBeforeUpdate() - store the previous value of state & props (before changes).
  It must come with `componentDidUpdate()` function.

- componentDidUpdate() - The final method for updating. We can send the final value, or the data to DB etc..
