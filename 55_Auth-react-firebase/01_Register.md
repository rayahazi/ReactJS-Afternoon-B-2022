# React-auth with firebase:

* Create new area for our app in firebase: `react-auth`. 
* In the area: Go to `Authentication` -> get started -> Sign-in providers: Add Email enabled. 

### prequisits:

* hooks: useRef, useContext


## First stage - add a new user to db:

* install firebase & routing in our app
```
npm i firebase
npm i react-router-dom
```

* firebase.js
```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCznHjepBTc6-Gus2YvAChKvJVFMdF-F3w",
    authDomain: "auth-dev-34b1d.firebaseapp.com",
    projectId: "auth-dev-34b1d",
    storageBucket: "auth-dev-34b1d.appspot.com",
    messagingSenderId: "751967215443",
    appId: "1:751967215443:web:16f1bfb80bac284d58cba6",
    measurementId: "G-CNB02BVV72"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);

export default app;
```

* index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/ContextAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);

reportWebVitals();


```

* App.js
```js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Nav from './components/Nav'
import Register from './components/Register'

export default function App() {
  return (
    <div className='container'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

    </div>
  )
}

```

* context/contextAuth.js

```js
import React, { useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    user,
    signin,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
```

* Home.js
```js
import React from 'react'

export default function Home() {
  return (
    <div>
        
    </div>
  )
}
```

* Nav:
```js
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar lg bg-light">
            <a className="navbar-brand" href="#">OurApp</a>
                <Link to='/' className="nav-item">Home</Link>
                <Link to='/login' className="nav-item">Login</Link>
                <Link to='/register' className="nav-item">Register</Link>
    </nav>
  )
}

```

* Register:


* Note: About useRef: 
```js
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
```





