# Show single page

### 1. Create new file `SingleArticlePage.js`

```js
import React from 'react';
import { useParams } from 'react-router-dom';
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
        </div>
    </div>
  )
}

```

### 2. In App.js - create another route for specific article:
```js
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddArticleForm from './articles/AddArticleForm';
import ArticlesList from './articles/ArticlesList';
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

      </Routes>
    </BrowserRouter>
  )
}
```



### 3. Add link to `view article` in ArticlesList.js
```js
import React from 'react'
import { useSelector } from 'react-redux'
// 1. import 
import { Link } from 'react-router-dom'

export default function ArticlesList() {

    const articles = useSelector(state => state.articles);

    return (
        <div>
            {articles.map(article => (
                <div key={article.id} className='card'>
                    <div className='card-body'>
                    <h3 className='card-title'>{article.title}</h3>
                    <p className='card-text'>{article.content}</p>

                    {/* Add a link to view that article */}
                    <Link to={`/articles/${article.id}`} className='btn btn-primary'
                    >View article</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
```

### 4. Update Navbar.js - add articles link

```js
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <h1 className='text-center'>Welcome to our website</h1>

        <div className='nav nav-tabs'>
            <div className='nav-item'>
              <Link to='/' className='nav-link active'>Articles</Link>
            </div>
        </div>
    </nav>
  )
}

```