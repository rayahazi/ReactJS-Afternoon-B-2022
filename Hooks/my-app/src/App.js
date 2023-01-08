import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Gallery from './components/Gallery'
import SavedImages from './components/SavedImages'
import { ImgProvider } from './components/ImgContext'

export default function App() {
  return (
    <ImgProvider>
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path='/' element={<Gallery/>}/>
            <Route path='/savedImages' element={<SavedImages/>}/>
        </Routes>
      </BrowserRouter>
    </ImgProvider>
  )
}
