// This file will contain all links:

import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function MyRouter() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    {/* http://localhost:3000/home */}
                    <Link to='/home' className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    {/* http://localhost:3000/about */}
                    <Link to='/about' className="nav-link active">About</Link>
                </li>
                <li className="nav-item">
                    {/* http://localhost:3000/items */}
                    <Link to='/items' className="nav-link active">Items</Link>
                </li>
                <li className="nav-item">
                    {/* http://localhost:3000/contactus */}
                    <Link to='/contactus' className="nav-link active">Contact us</Link>
                </li>
            </ul>
        </nav>
        {/* Renders the child route's element, if there is one. */}
        <Outlet/>
    </div>
  )
}
