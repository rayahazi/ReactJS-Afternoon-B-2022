import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Items() {
  return (
    <div className='container'>
      <h2>Our products</h2>

      <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <button className="btn btn-primary m-2">
                    <Link to='/items/coffee' className="nav-link active">Coffee</Link>
                </button>
                <button className="btn btn-primary m-2">
                    <Link to='/items/drink' className="nav-link active">Drinks</Link>
                </button>
                <button className="btn btn-primary m-2">
                    <Link to='/items/salad' className="nav-link active">Salads</Link>
                </button>
            </ul>
        </nav>
        {/* Renders the child route's element, if there is one. */}
        <Outlet/>


    </div>
  )
}
