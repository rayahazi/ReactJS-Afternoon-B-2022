# Basic app in reactJS

in CMD/ terminal:

- create new website

```
npm init react-app my-app
// or
yarn create react-app my-app
```

> note: install yarn: npm install --global yarn

- enter the folder

```
cd my-app
```

- activate the app

```
npm start
// or
yarn start
```

- The app will open in the browser automatically in address: `http://localhost:3000`
- The page will reload automatically after changes in the code.

### Open `App.js` and change the file:

```js
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
```
