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
