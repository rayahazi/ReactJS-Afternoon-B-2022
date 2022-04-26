# useEffect hook

- Will be used only in a function

- Allow us to preform side-effects in functions

- in React classes, we put side effects into componentDidMount and componentDidUpdate.

#### Side effects

- fetch data - from database, API
- timers
- directly update the DOM.

#### useEffect gets 2 parameters:

1. function
2. array of dependencies (optional!)

## Example - timer

- Simple timer in useEffect hook - it will increment the variable counter each second in 1.
- There is no calling for the function - run automatically
- Without dependencies - runs on every render
- With dependencies - runs only on the first render, and when the dependency changes

```js
// 1. import
import React, { useState, useEffect } from "react";

export default function Timer() {
  // 2. define variable counter
  const [counter, setCounter] = useState(0);

  // 3. It will be called automatically, and will run endlessly
  // after a second - will increment the counter in 1
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  });

  return (
    <div>
      <h2>Counter = {counter}</h2>
    </div>
  );
}
```

- Use empty array in dependencies - it will run only in the first render:

```js
// 1. import
import React, { useState, useEffect } from "react";

export default function Timer() {
  // 2. define variable counter
  const [counter, setCounter] = useState(0);

  // 3. When we use empty array in dependencies -
  // useEffect will run only in the first render
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Counter = {counter}</h2>
    </div>
  );
}
```

Add dependencies:

```js
// 1. import
import React, { useState, useEffect } from "react";

export default function Timer() {
  // 2. define variable counter
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState([]);

  // 3. It will run in the first render,
  // and each time counter is changed
  useEffect(() => setResult([...result, "x"]), [counter]);

  return (
    <div>
      <h2>Counter = {counter}</h2>
      <h2>Result = {result}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  );
}
```

## fetch data using useEffect & axios

```js
// 1. import
import React, { useState, useEffect } from "react";
// 2. import axios library (need to install: npm i axios)
import axios from "axios";

export default function App() {
  // 3. state to get data from URL
  const [todos, setTodos] = useState([]);

  let fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTodos(data);
  };

  // 4. fetch data:
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>My to-do list</h1>
      {todos.length > 0 &&
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.completed ? (
              <li className="alert alert-success">{todo.title}</li>
            ) : (
              <li className="alert alert-danger">{todo.title}</li>
            )}
          </div>
        ))}
    </div>
  );
}
```
