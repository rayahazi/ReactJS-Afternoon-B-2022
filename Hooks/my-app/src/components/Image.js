import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import ImgContext from '../components/ImgContext'

export default function Image({ name, url, numOfLikes }) {

  const { AddToSavedImages } = useContext(ImgContext)
  console.log(url)

  return (
    <div onClick={() => AddToSavedImages(name, url, numOfLikes)} className='card'>
        <img src={url} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><FaHeart/>{numOfLikes}</p>
          <a href="#" className="btn btn-primary" onClick={()=>AddToSavedImages()}>Save</a>
        </div>
    </div>
  )
}
