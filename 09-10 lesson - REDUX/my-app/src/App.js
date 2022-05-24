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