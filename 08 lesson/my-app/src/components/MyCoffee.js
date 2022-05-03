import React from 'react'
import { useParams } from 'react-router-dom'
import { myCoffees } from '../dummy-data'

export default function MyCoffee() {

    // Get all the params from the URL
    let params = useParams();

    // Get the full object for the current param value:
    let myCoffeeChoice = myCoffees.find(coffee => coffee.name === params.coffeeName)

  return (
    <div style={{marginTop:10, padding:10, border:'1px solid black'}}>
        {myCoffeeChoice != null && (
        <>
        <h6>{myCoffeeChoice.name}</h6>
        <p>price: {myCoffeeChoice.price} Shekel</p>
        <img height={150} src={myCoffeeChoice.img}/>
        </>)
        
        || <h3>Coffee not found!</h3>}

    </div>
  )
}
