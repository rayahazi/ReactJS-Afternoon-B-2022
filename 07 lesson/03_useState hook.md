# Hooks

- Hooks are used in function components
- they are built-in methods similar to the methods we have in a class component.

Hooks allow us to use only functions, and classes are no longer needed.

# UseState hook

- Store variables of a function
- useState accepts an initial state and returns 2 values:
  - The current value
  - A function to update the value

## basic actions

1. import useState from 'react' library
2. define a variable counter with initial value of 0
3. show counter in the browser
4. update the value of conuter using a button(counter++)

useState value can be from any type: number, string, boolean, array, matrix, object

```js
// 1. import
import React, { useState } from "react";

const App = () => {
  // 2. init state
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      {/* 3. show state to the DOM */}
      <h3>counter is {counter}</h3>

      {/* 4. Update the state */}
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        Click me
      </button>
    </div>
  );
};

export default App;
```

### Update objects - using destructuring

```js
// 1. import
import React, { useState } from "react";

const App = () => {
  // 2. init state
  const [address, setAddress] = useState({
    city: "Jerusalem",
    country: "Israel",
  });

  return (
    <div className="container">
      {/* 3. show state to the DOM */}
      <h2>
        I live in {address.city}, {address.country}
      </h2>

      {/* 4. Update the city - wrong way - will override all the previous data */}
      <button
        onClick={() => setAddress({ city: "Ariel" })}
        className="btn btn-danger"
      >
        Update city
      </button>

      <br />

      {/* 4. Update the city - right way */}
      <button
        onClick={() => setAddress({ ...address, city: "Ariel" })}
        className="btn btn-success"
      >
        Update city
      </button>
    </div>
  );
};

export default App;
```

### Update array - using destructuring - prime numbers

```js
// 1. import
import React, { useState } from "react";

const App = () => {
  // 2. init state
  const [primeNumbers, setPrimeNumbers] = useState([1, 2, 3, 5, 7, 11]);

  // function to return true/false if number is prime
  let isPrime = (num) => {
    if (num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i < num; i = i + 6)
      if (num % i == 0 || num % (i + 2) == 0) return false;
    return true;
  };

  // function to get last number in array, and put the next prime
  // in the array back.
  let getNextPrime = () => {
    let lastNum = primeNumbers[primeNumbers.length - 1]; // 11

    while (true) {
      lastNum++;
      if (isPrime(lastNum)) break;
    }

    setPrimeNumbers([...primeNumbers, lastNum]);
  };

  return (
    <div className="container">
      {/* 3. show state to the DOM */}
      <h2>Prime numbers - מספרים ראשוניים</h2>
      {primeNumbers.map((num) => (
        <li key={num}>{num}</li>
      ))}

      {/* 4. Update the array - wrong way - will override all the previous data */}
      <button onClick={() => setPrimeNumbers([13])} className="btn btn-danger">
        Add next prime
      </button>

      <br />

      {/* 4. Update the array - right way */}
      {/* ...primeNumbers == 1, 2, 3, 5, 7, 11 */}
      <button
        onClick={() => setPrimeNumbers([...primeNumbers, 13])}
        className="btn btn-success"
      >
        Add next prime
      </button>

      <br />

      {/* 4. Update the array - right way */}
      {/* redirect to external function that will get the next prime number */}
      <button onClick={() => getNextPrime()} className="btn btn-primary">
        Add next prime
      </button>
    </div>
  );
};

export default App;
```
