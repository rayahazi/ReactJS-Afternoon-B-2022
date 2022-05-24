# Update article


### articlesSlice.js - add a new function to handle UPDATEs
```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

// first state for the articles:
const initialState = [
    {id: nanoid(), title:'article 1', content:'about tigers'},
    {id: nanoid(), title:'article 2', content:'about dolphins'},
];

const articlesSlice = createSlice({
    name:'articles',
    initialState,
    reducers: {
        articleAdded(state, action){
            state.push(action.payload)
        },

        // Create new reducer function for UPDATE
        articleUpdated(state, action){
            // destructuring
            const { id, title, content } = action.payload; 
            // find which article to update - by id
            const existingArticle = state.find(article => article.id === id);
            if(existingArticle){
                existingArticle.title = title;
                existingArticle.content = content;
            }
        }

    }
})

// export the function so we can add new article from any place in our app
export const { articleAdded, articleUpdated } = articlesSlice.actions;

export default articlesSlice.reducer;
```

### create `EditArticleForm.js`

```js
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { articleUpdated } from './articleSlice';

export default function EditArticleForm() {

    // get the id from params
    const { articleId } = useParams();

    // Use the id from params - to get the full article object
    // state.articles -> is the array of articles (in redux)
    const article = useSelector(state => 
        state.articles.find(article => article.id === articleId))

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    // 2. Activate functions:
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 3. Create a function to save the new article to the global store:
    const onUpdateArticleClicked = () => {
        if(title !== '' && content !== '')
            // [{id:, title: , content: }]
            dispatch(articleUpdated( {id: articleId, title, content} ));
        
        // After update - go back to the article page
        navigate(`/articles/${articleId}`);

    }

    return (
    <div>
        <div style={{padding:10}} className='bg-light'>
            <h4 className='text-center'>Edit article</h4>
            <div className="input-group mb-3">
                <label className="input-group-text">Article title:</label>
                <input value={title} type='text' onChange={onTitleChanged} className='form-control'/>
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text">content:</label>
                <textarea value={content} type='text' onChange={onContentChanged} className='form-control'/>
            </div>

            {/* Call the function - to store article */}
            <button onClick={onUpdateArticleClicked} className='btn btn-success'>Update article</button>
        </div>
        <br/>
    </div>
    )
}


```

### Add another route to App.js
```js
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddArticleForm from './articles/AddArticleForm';
import ArticlesList from './articles/ArticlesList';
import EditArticleForm from './articles/EditArticleForm';
// 1. import the component
import SingleArticlePage from './articles/SingleArticlePage'

import Navbar from './components/Navbar';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        {/* localhost:3000 */}
        <Route path='/' element={
          <React.Fragment>
            <AddArticleForm/>
            <ArticlesList/>
          </React.Fragment>
        }/>

        {/* 2. define a route for specific article
         localhost:3000/articles/:articleId */}
        <Route path='/articles/:articleId' element={<SingleArticlePage/>}/>

         {/* Route for edit */}
        <Route path='/editArticle/:articleId' element={<EditArticleForm/>}/>

      </Routes>
    </BrowserRouter>
  )
}

```


### Add link in `SingleArticlePage.js`

```js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

// When user presses the article -> redirect to article page:
// localhost:3000 -> localhost:3000/articles/:articleId

export default function SingleArticlePage() {

    // we want to get the id from params(of URL). 
    const { articleId } = useParams();

    // Use the id from params - to get the full article object
    // state.articles -> is the array of articles (in redux)
    const article = useSelector(state => 
        state.articles.find(article => article.id === articleId))

    if(!article){
        return <h2>Article was not found!</h2>
    }

  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{article.title}</h2>
        <p className='card-text'>{article.content}</p>

        <Link to={`/editArticle/${article.id}`} className='btn btn-primary'
        >Edit article</Link>
        </div>
    </div>
  )
}

```
