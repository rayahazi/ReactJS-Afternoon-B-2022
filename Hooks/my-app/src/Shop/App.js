import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import Checkout from './components/Checkout';
import { CartProvider } from './CartContext';

export default function App() {
  return (
    <div className='container'> 
    <CartProvider>
    <BrowserRouter>
    <Nav/>
      <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  )
}
