import React, {useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ContextAuth';
import { Link } from 'react-router-dom';

export default function Register() {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const emailRef = useRef('')
    const passRef  = useRef('')
    const passAgainRef = useRef('')
    const navigate = useNavigate()
    // 1. Add:
    const { register } = useAuth()

   let CreateNewUser = async(e) => {

    passRef.current.value !== passAgainRef.current.value && setError("Passwords do not match")
    
    try{
        setError('')
        setLoading(true)
        await register(emailRef.current.value, passRef.current.value);
        navigate('/')
    }catch(e){
        setError(`Failed to create a new account. ${e.message}`)
    }
    setLoading(false)
   }

  return (
    <div>

        <h2 className='alert alert-success text-center'>Register</h2>
        {error && <h5 className='alert alert-danger'>{error}</h5>}
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input ref={emailRef} type="email" className="form-control"/>
            <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input ref={passRef} type="password" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input ref={passAgainRef} type="password" className="form-control"/>
        </div>
        <button disabled={loading} className="btn btn-primary" onClick={CreateNewUser} >Submit</button>

        <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}
