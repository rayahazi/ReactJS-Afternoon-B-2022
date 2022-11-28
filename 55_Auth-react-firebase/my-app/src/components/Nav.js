import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar lg bg-light">
            <a className="navbar-brand" href="#">OurApp</a>
                <Link to='/' className="nav-item">Home</Link>
                <Link to='/login' className="nav-item">Login</Link>
                <Link to='/register' className="nav-item">Register</Link>
    </nav>
  )
}
