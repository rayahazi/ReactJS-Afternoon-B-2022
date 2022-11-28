import React from "react"
import { Route, Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      element={props => {
        return currentUser ? <Outlet {...props} /> : <Navigate to="/login" />
      }}
    />
  )
}


// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//     const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }



/*
import React from "react"
import { Route, useNavigate, Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  return (
    <Route
      {...rest}
      element={props => {
        return currentUser ? <Component {...props} /> : navigate("login") 
      }}
    />
  )
}

*/