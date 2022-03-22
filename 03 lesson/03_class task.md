# Class task - calculate Area and circumference

#### Create 3 blocks:

1. Square
2. Triangle
3. Circle

#### For each one:

1. Add image of the shape & a header
2. Add inputs to calculate area and circumference from user.
   > note: use bind for area and arrow function for circumference
3. Design the elements in CSS - initial style
   - color
   - bg-color
4. after calculation - change the style to be a different:
   - color
   - bg-color

> note: You can separate the data to 3 different files. Not must

### Goodluck!

## Solution:

```js
import React, { Component } from "react";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArea: false,
      resArea: undefined,

      showCirc: false,
      resCirc: undefined,
    };
  }
  calculateArea() {
    // .value - will bring us the value inside the input
    let height = document.getElementById("hSquare1").value;
    let width = document.getElementById("wSquare1").value;
    // update the state - so we can see the result
    this.setState({ showArea: true, resArea: height * width });
  }
  calculateCirc() {
    let height = document.getElementById("hSquare2").value;
    let width = document.getElementById("wSquare2").value;
    this.setState({ showCirc: true, resCirc: height * 2 + width * 2 });
  }

  render() {
    return (
      <div className="container">
        <h2>Square</h2>
        <img
          height="50"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/800px-Square_-_black_simple.svg.png"
        />
        {/* Calculate area */}
        <h4>Area:</h4>
        <input
          class="form-control"
          type="number"
          placeholder="height"
          id="hSquare1"
          required
        />
        <input
          class="form-control"
          type="number"
          placeholder="width"
          id="wSquare1"
          required
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={() => this.calculateArea()}
        >
          Calculate
        </button>
        {/* If there is result - show the result! */}
        {/* () ? ... : ... */}
        {this.state.showArea ? (
          <h3 className="alert alert-success">{this.state.resArea}</h3>
        ) : null}{" "}
        <hr />
        {/* Calculate Circumference */}
        <h4>Circumference:</h4>
        <input
          class="form-control"
          type="number"
          placeholder="height"
          id="hSquare2"
          required
        />
        <input
          class="form-control"
          type="number"
          placeholder="width"
          id="wSquare2"
          required
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={() => this.calculateCirc()}
        >
          Calculate
        </button>
        {/* If there is result - show the result! */}
        {this.state.showCirc ? (
          <h3 className="alert alert-success"> {this.state.resCirc}</h3>
        ) : null}
      </div>
    );
  }
}
```
