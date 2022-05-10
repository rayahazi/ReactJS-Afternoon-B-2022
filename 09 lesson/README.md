# Redux - global state container

### What is redux?

`A Predictable State Container for JS Apps`

- Redux is an open-source JS library for managing global state.
- It can run in different evnironments (client, server, native).
- Can be used in many libraries & frameworks: react, angular etc..

### Why use redux?

- When we want to share data between components, and update it at the same time.
- When we want to share data between components that are not in the component tree.
- It implements performance optimization - react is already pretty fast (virtual-dom), but redux will remove unnecessary
  re-renders.

### Install:

- For new app

```
npx create-react-app my-app --template redux
```

- For existing app

```
// npm
npm i react-redux

// yarn
yarn add react-redux

// or:
npm install @reduxjs/toolkit react-redux

```

### Redux parts

1. **store** - immutable object tree. A store is a state container that holds the app state. We have only 1 store for an app.

2. **actions** - plain JS objects that contain info. Actions are the only source of information to the store. Actions have a type field that tells what kind of action to preform, and all the other fields contain info / data.

3. **reducer** - pure functions that take the action and the previous state of the app, and return the new value(state).

   - reducers must always:
     - calculate the new state value based on the state and action parameter
     - they cannot do asyncronous logic, random values or any side effects.
   - reducet always will:
     a. check to see if the recucer can use the action
     b. if so - make a copy of the state, update the copy with the new values, and return it.
     c. else - return the current state.

### How do they work together?

- user preforms an action.
- we create action object and dispatch it.
- forward the action to the reducer
- the reducer will return an updated copy of the state

in other words: action -> store -> reducer (update and back to store).

### Most basic example:

- store.js

```js
import { createStore } from "redux";

// 2. actions
const ADDTODO = "AddToDo";
const REMOVETODO = "RemoveToDo";

// 3. reducer
// [{1, 'clean', false}, {2, 'study', false}]
// action: type, payload
let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    // Add new item to the array
    case ADDTODO:
      return [
        ...state,
        { id: ++lastId, desc: action.payload.desc, resolve: false },
      ];
    // remove specific item from array(by)
    case REMOVETODO:
      return state.filter((toDo) => toDo.id !== action.payload.id);
    default:
      break;
  }
}

// 1. store
const store = createStore(reducer);
export default store;

// Add REMOVETODO to reducer, remove object from the array
// using it's id.
```

- index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 1. import
import store from "./store";

console.log(store);
// {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

// will run after every change in store
// getState - will show the current global state
store.subscribe(() => console.log("store changed!", store.getState()));

// dispatch - call the recuer - update the global state
store.dispatch({ type: "AddToDo", payload: { desc: "Study react-redux" } });
store.dispatch({ type: "AddToDo", payload: { desc: "Wash the dishes" } });
store.dispatch({ type: "AddToDo", payload: { desc: "do my homework" } });

store.dispatch({ type: "RemoveToDo", payload: { id: 2 } });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
```
