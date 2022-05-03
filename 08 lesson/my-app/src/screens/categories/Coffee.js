import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// 1. import the array from dummy-data
import { myCoffees } from '../../dummy-data'

export default function Coffee() {
  return (
    <div>
      <h5>Pick your coffee</h5>

      <nav>
        {/* localhost:3000/items/coffee/espresso */}
        {/* localhost:3000/items/coffee/latte */}
        {/* localhost:3000/items/coffee/cappuchinno */}
        {myCoffees.map(coffee => (
          <div key={coffee.id}>
          <Link to={`/items/coffee/${coffee.name}`}>{coffee.name}</Link>
          </div>
        ))}
        </nav>
        <Outlet/>
    </div>
  )
}
