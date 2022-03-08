# Structure of reactJS app

- `gitignore` - tells git which files not to upload.
- `package.json` - define basic settings and dependencies.
- `README.md` - documentation

```
# my-first-app

This is a documentation about my webiste...
```

### node-modules

a folder containing all the modules that the app depends on.

### public

In this folder - we put the assets: images, fonts, global colors etc..

we can remove: `favicon.ico`, `logo192.png`, `logo512.png`

- `index.html` - the only html file in the entire app. (SPA).
  we can remove all links to logos.
  we can change the title of the app
  we can add bootstrap here.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>my-first-app</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- `manifiest.json` - settings of the app
  remove the icons array.

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

- `robots.txt` - security file. tells the google crawler to which address not to enter.

### src

we can remove: `logo.svg`

- `index.js`

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render() - send the data to the broswer (DOM).
ReactDOM.render(
  <React.StrictMode>
    {/* Send the main component to the root block
    in index.html */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
```

- `App.js` - this is the main component

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

- `App.css` - the style for `App.js

```css
.App {
  text-align: center;
}
```
