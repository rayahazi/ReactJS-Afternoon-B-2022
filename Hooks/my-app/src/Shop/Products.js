import React from 'react'
import Cart from './Cart'

export default function Products() {

    const products = [
        { name: 'shirt', price: 10 }, 
        { name: 'skirt', price: 100 }, 
        { name: 'jacket', price: 20 }, 
        { name: 'dress', price: 55 }
    ]

  return (
    <div>
        {products.map(p => <Cart key={p.name} name={p.name} price={p.price}/>)}
    </div>
  )
}
