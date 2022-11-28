import React, {useState} from 'react'
import { useAuth } from '../context/ContextAuth'
import { useNavigate } from "react-router-dom"

export default function Home() {

  const [error, setError] = useState('')
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  
  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div>
        <h2 className='text-center bg-info'>User profile</h2>
        {error && <h5 className='alert alert-danger'>{error}</h5>}
        {user &&  <p>Email: {user.email}</p>}
        <div className="text-center mt-2">
        <button className='btn btn-primary' onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  )
}

