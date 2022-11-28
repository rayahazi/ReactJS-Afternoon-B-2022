# Home - after user is registered:

* Goes to HomePage. 

> More: Update user details, private-routes, 


* Home.js
```js
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


```

* Login.js
```js
import React, {useRef, useState} from 'react'
import { useAuth } from "../context/ContextAuth"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const { signin } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  
    async function logUserIn(e) {
      e.preventDefault()
    //   console.log(emailRef.current.value, passwordRef.current.value)
  
      try {
        setError("")
        setLoading(true)
        await signin(emailRef.current.value, passwordRef.current.value).then((userCredential)=>{
        let user = userCredential.user;
        navigate("/")
      })
      } catch(e) {
        setError(`Failed to log in ${e.message}`)
      }
  
      setLoading(false)
    }

  return (
    <div>
    <h2 className='alert alert-success text-center'>Login</h2>
    {error && <h2 className='alert alert-danger'>{error}</h2>}

    <form onSubmit={logUserIn}>
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" ref={emailRef} className="form-control" />
            <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
```























