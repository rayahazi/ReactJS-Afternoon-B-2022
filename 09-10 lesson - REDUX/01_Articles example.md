# Articles example using redux

#### Create a Navbar.js component:

```js
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h1 className="text-center">Welcome to our website</h1>
    </nav>
  );
}
```

#### Import to App.js and add routing:

```js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h4>Welcome to our website</h4>} />
      </Routes>
    </BrowserRouter>
  );
}
```

#### Create store.js

Add configureStore() function. It is a better use for `createStore()`

```js
// npm i @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// A friendly abstraction over the standard Redux createStore() function.
export default configureStore({ reducer: () => {} });
```

#### Add to index.js - make it available to the entire app

```js
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import the Provider - global store
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.render(
  // Wrap the entire app with global store:
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
```

#### Create articles/articleSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

// first state for the articles:
const initialState = [
  { id: 1, title: "First article", content: "about dolphins" },
  { id: 2, title: "Second article", content: "about sharks" },
];

// Make reducer function with initial data
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});

export default articlesSlice.reducer;
```

#### Add to store:

```js
import { createSlice } from "@reduxjs/toolkit";

// first state for the articles:
const initialState = [
  { id: 1, title: "First article", content: "about dolphins" },
  { id: 2, title: "Second article", content: "about sharks" },
];

// Make reducer function with initial data
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});

export default articlesSlice.reducer;
```

#### articles/ArticlesList

Show all articles in a nice output (card design)

```js
import React from "react";
import { useSelector } from "react-redux";

export default function ArticlesList() {
  const articles = useSelector((state) => state.articles);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} className="card">
          <div className="card-body">
            <h3 className="card-title">{article.title}</h3>
            <p className="card-text">{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

#### Add to App.js

```js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesList from "./articles/ArticlesList";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### AddArticleForm.js

Create UI for new article. button still not working.

```js
import React, { useState } from "react";

export default function AddArticleForm() {
  // 2 variables to get from user input:
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // define 2 functions to handle change:
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <div>
      {/* id: built-in ,title:user, content:user */}
      <form style={{ padding: 10 }} className="bg-light">
        <h4 className="text-center">Add new article</h4>
        <div className="input-group mb-3">
          <label class="input-group-text">Article title:</label>
          <input
            type="text"
            onChange={onTitleChanged}
            className="form-control"
          />
        </div>

        <div className="input-group mb-3">
          <label class="input-group-text">content:</label>
          <textarea
            type="text"
            onChange={onContentChanged}
            className="form-control"
          />
        </div>

        <button className="btn btn-success">Save article</button>
      </form>
      <br />
    </div>
  );
}
```

#### In articleSlice.js - add a function to handle new article, and export it

```js
import { createSlice } from "@reduxjs/toolkit";

// first state for the articles:
const initialState = [
  { id: 1, title: "First article", content: "about dolphins" },
  { id: 2, title: "Second article", content: "about sharks" },
];

// Make reducer function with initial data
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  // Add a function to add a new article
  reducers: {
    articleAdded(state, action) {
      state.push(action.payload);
    },
  },
});

// export the function so we can add new article from any place in our app
export const { articleAdded } = articlesSlice.actions;

export default articlesSlice.reducer;
```

#### In AddArticleForm - call that function:

```js
import React, { useState } from "react";
// 1. Add imports:
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { articleAdded } from "./articleSlice";

export default function AddArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  // 2. Activate functions:
  const dispatch = useDispatch();

  // 3. Create a function to save the new article to the global store:
  const onSaveArticleClicked = () => {
    if (title !== "" && content !== "")
      // [{id:, title: , content: }]
      dispatch(articleAdded({ id: nanoid(), title, content }));

    // Reset the data after new article was added
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <div style={{ padding: 10 }} className="bg-light">
        <h4 className="text-center">Add new article</h4>
        <div className="input-group mb-3">
          <label className="input-group-text">Article title:</label>
          <input
            value={title}
            type="text"
            onChange={onTitleChanged}
            className="form-control"
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text">content:</label>
          <textarea
            value={content}
            type="text"
            onChange={onContentChanged}
            className="form-control"
          />
        </div>

        {/* Call the function - to store article */}
        <button onClick={onSaveArticleClicked} className="btn btn-success">
          Save article
        </button>
      </div>
      <br />
    </div>
  );
}
```
