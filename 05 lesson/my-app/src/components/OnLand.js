import React, { Component } from 'react'
import { arrLandAnimals } from '../db/data'

export default class OnLand extends Component {

    constructor(props){
        super(props);
    }

    renderAnimalsList(){

       // take random values from an array:
        let randAnimals = arrLandAnimals.sort(() => .5 - Math.random()).slice(0,this.props.animalsNum)
        
        return randAnimals
        .filter((item, index) => index < this.props.animalsNum )
        .map(animal => {
            return(
            <div className="card" key={animal.id}>
            <img src={animal.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{animal.name}</h5>
              <p className="card-text">{animal.id}</p>
            </div>
          </div>
          )})
    }

  render() {
    return (
      <div className='container'>
          {this.renderAnimalsList()}
      </div>
    )
  }
}
