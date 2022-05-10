import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddArticleForm from './articles/AddArticleForm';
import ArticlesList from './articles/ArticlesList';

import Navbar from './components/Navbar';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <React.Fragment>
            <AddArticleForm/>
            <ArticlesList/>
          </React.Fragment>
        }/>
      </Routes>
    </BrowserRouter>
  )
}