import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillShopping } from 'react-icons/ai'
import { useContext } from 'react'
import CartContext from '../CartContext'

export default function Nav() {

    const { items } = useContext(CartContext)
    // console.log(item);

  return (
    <nav className='navbar'>
        <Link to="/"><h1>Items</h1></Link>
        <Link to="/checkout">
            <div className='cart'>
                <AiFillShopping />
                <span>{items.length}</span>
            </div>
        </Link>
    </nav>
  )
}
