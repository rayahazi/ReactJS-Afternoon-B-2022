import React, { useContext } from 'react'
import CartContext from '../CartContext'

export default function Checkout() {

  const { items } = useContext(CartContext);

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {items.map(item => (
          <div>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>



    </div>
  )
}
