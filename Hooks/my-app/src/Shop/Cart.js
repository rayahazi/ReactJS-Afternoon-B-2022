import React, { useContext } from 'react'
import { AiFillShopping } from 'react-icons/ai'
import { IoIosShirt } from 'react-icons/io'
import CartContext from '../CartContext'

export default function Cart({ name, price }) {

  const { AddToCard } = useContext(CartContext)

  return (
    <div onClick={() => AddToCard(name, price)} className='card'>
        <div>
            <IoIosShirt />
        </div>
        <div className='purchase'>
            <h3>{name}</h3>
            <AiFillShopping/>
        </div>
        <h4>${price}</h4>
    </div>
  )
}
