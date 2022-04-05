import React, { Component } from 'react'
import { arrSkyAnimals } from '../db/data'

export default class OnSky extends Component {
  render() {
    return (
      <div className='container'>
          {arrSkyAnimals.map(animal => {
              return(
              <div className="card" key={animal.id}>
              <img src={animal.img} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{animal.name}</h5>
                <p className="card-text">{animal.id}</p>
              </div>
            </div>
            )})}
      </div>
    )
  }
}
