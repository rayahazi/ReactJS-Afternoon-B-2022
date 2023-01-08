import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useContext } from 'react'
import ImgContext from './ImgContext'

export default function Nav() {

    const { savedImages } = useContext(ImgContext)

  return (
    <nav className='navbar navbar-expand-lg' style={{backgroundColor: '#e3f2fd'}}>
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" style={{marginLeft:15}}>
          <Link to="/">Gallery</Link>
          </a>
        </li>
        </ul>
        
        <Link to="/savedImages">
            <div className='cart'>
                <FaUser />
                <span>{savedImages.length}</span>
            </div>
        </Link>
    </nav>
  )
}
