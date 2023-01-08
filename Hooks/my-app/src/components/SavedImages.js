import React, { useContext } from 'react'
import ImgContext from './ImgContext'
import { FaHeart } from 'react-icons/fa'

export default function SavedImages() {

  const { savedImages } = useContext(ImgContext);

  return (
    <div>
      <h2>Saved images</h2>
      {savedImages.map(i => 
        <div className='card col-3'>
        <img src={i.url} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{i.name}</h5>
          <p className="card-text"><FaHeart/>{i.numOfLikes}</p>
        </div>
        </div>
      )}
    </div>
  )
}
