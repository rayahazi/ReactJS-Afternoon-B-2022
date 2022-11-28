import React from "react"
import Signup from "./components/SignUp"
import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
            <Routes>
              <PrivateRoute exact path="/" element={<Dashboard/>} /> 
              <PrivateRoute path="/update-profile" element={<UpdateProfile/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
              <Route path="*" element={<p>404 - NOT FOUND</p>}/>
            </Routes>
      </div>
    </Container>
  )
}

export default App