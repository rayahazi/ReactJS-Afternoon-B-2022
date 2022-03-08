# JSX - JavaScript XML

- JSX is HTML inside JS files.
- we put JSX inside `return()` function.
- Inside HTML we can add JavaScript code, using `{}`

#### JSX must send always only 1 element!

in return function we can only send 1 element of HTML. If we want to return more - we can wrap with parent element. (usually it will be `div`).

```js
import "./App.css";

function App() {
  let str = "Hello world!";

  return (
    <div className="App">
      <h1>{str}</h1>
    </div>
  );
}

export default App;
```

### object example:

```js
import "./App.css";

function App() {
  let flower = {
    fName: "ROSE",
    fPrice: "5.95",
    fImg: "https://s3.envato.com/files/243379154/06511EOS%206D%20Mark%20II10-03-2018.jpg",
  };

  return (
    <div className="App">
      <h2>{flower.fName}</h2>
      <h6>Price: {flower.fPrice} shekel</h6>
      <img src={flower.fImg} height={200} />
    </div>
  );
}

// Create an array of 5 country objects
// each object will have: countryName, capital, flag(image), population.
// Show all the details in the browser.
export default App;
```

### Use a list - hardcoded way:

```js
import "./App.css";

function App() {
  let countries = [
    {
      name: "Israel",
      capital: "Jerusalem",
      population: "9.217 million",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png",
    },
    {
      name: "Spain",
      capital: "Madrid",
      population: "47.35 million",
      flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
    },
    {
      name: "Greece",
      capital: "Athens",
      population: "10.72 million",
      flag: "https://vignette.wikia.nocookie.net/cyberpunk/images/f/fd/Greece_Flag.png/revision/latest?cb=20200130010907",
    },
    {
      name: "France",
      capital: "Paris",
      population: "67.413 million",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/188px-Flag_of_France.svg.png",
    },
  ];

  return (
    <div className="App">
      <div>
        <h3>
          {countries[0].name} - {countries[0].capital}
        </h3>
        <p>Population: {countries[0].population}</p>
        <img src={countries[0].flag} height={100} />
      </div>

      <div>
        <h3>
          {countries[1].name} - {countries[1].capital}
        </h3>
        <p>Population: {countries[1].population}</p>
        <img src={countries[1].flag} height={100} />
      </div>

      <div>
        <h3>
          {countries[2].name} - {countries[2].capital}
        </h3>
        <p>Population: {countries[2].population}</p>
        <img src={countries[2].flag} height={100} />
      </div>

      <div>
        <h3>
          {countries[3].name} - {countries[3].capital}
        </h3>
        <p>Population: {countries[3].population}</p>
        <img src={countries[3].flag} height={100} />
      </div>
    </div>
  );
}

// Create an array of 5 country objects
// each object will have: countryName, capital, flag(image), population.
// Show all the details in the browser.
export default App;
```

## Use a list - programming way:

```js
import "./App.css";

function App() {
  let countries = [
    {
      name: "Israel",
      capital: "Jerusalem",
      population: "9.217 million",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png",
    },
    {
      name: "Spain",
      capital: "Madrid",
      population: "47.35 million",
      flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
    },
    {
      name: "Greece",
      capital: "Athens",
      population: "10.72 million",
      flag: "https://vignette.wikia.nocookie.net/cyberpunk/images/f/fd/Greece_Flag.png/revision/latest?cb=20200130010907",
    },
    {
      name: "France",
      capital: "Paris",
      population: "67.413 million",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/188px-Flag_of_France.svg.png",
    },
  ];

  return (
    <div className="App">
      {countries.map((country) => (
        <div>
          <h3>
            {country.name} - {country.capital}
          </h3>
          <p>Population: {country.population}</p>
          <img src={country.flag} height={100} />
        </div>
      ))}
    </div>
  );
}

// Create an array of 5 country objects
// each object will have: countryName, capital, flag(image), population.
// Show all the details in the browser.
export default App;
```

### Wrap elements with empty element:

We can use empty element when we must wrap elements with 1 value:
(it doesn't have to be a div).

```js
<div className="App">
  {countries.map((country) => (
    <>
      <h3>
        {country.name} - {country.capital}
      </h3>
      <p>Population: {country.population}</p>
      <img src={country.flag} height={100} />
    </>
  ))}
</div>
```

## ClassName instead of class:

in html we define CSS classes this way:

```html
<div class="myClass"></div>
```

But, since we are in JS - class keyword is also used to create a class (OOP). Therefore - CSS classes will be called `className` in react.

```html
<div className="myClass"></div>
```
