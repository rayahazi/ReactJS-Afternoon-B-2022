
# UseContext - like pinterest: 

* ImgContext.js
```js
import { createContext, useState } from "react";

const ImgContext = createContext();

export function ImgProvider({children}){

    const [savedImages, setSavedImages] = useState([]);

    const AddToSavedImages = (name, url, numOfLikes) => {
        setSavedImages(prevState => [...prevState, { name, url, numOfLikes }])
    }

    return (
        <ImgContext.Provider value={{ savedImages, AddToSavedImages}}>
            {children}
        </ImgContext.Provider>
    )
}

export default ImgContext;
```

* App.js
```js
import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Gallery from './components/Gallery'
import SavedImages from './components/SavedImages'
import { ImgProvider } from './components/ImgContext'

export default function App() {
  return (
    <ImgProvider>
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path='/' element={<Gallery/>}/>
            <Route path='/savedImages' element={<SavedImages/>}/>
        </Routes>
      </BrowserRouter>
    </ImgProvider>
  )
}


```
* Nav.js
```js
import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useContext } from 'react'
import ImgContext from './ImgContext'

export default function Nav() {

    const { savedImages } = useContext(ImgContext)

  return (
    <nav className='navbar navbar-expand-lg' style={{backgroundColor: '#e3f2fd'}}>
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" style={{marginLeft:15}}>
          <Link to="/">Gallery</Link>
          </a>
        </li>
        </ul>
        
        <Link to="/savedImages">
            <div className='cart'>
                <FaUser />
                <span>{savedImages.length}</span>
            </div>
        </Link>
    </nav>
  )
}

```
* Gallery.js
```js
import React from 'react'
import Image from './Image'

export default function Gallery() {

    const products = [
        { name: 'Motorcycle', url: 'https://sport-sbor.ru/wp-content/uploads/2020/07/s1200.jpg', numOfLikes: 120   }, 
        { name: 'Cute Dog', url: 'https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg', numOfLikes: 1000  }, 
        { name: 'Flower', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flower_jtca001.jpg', numOfLikes: 100   }, 
        { name: 'Yellow Car', url: 'https://mobimg.b-cdn.net/v3/fetch/e4/e4827f228c6f874e6b089a43254cd61a.jpeg?w=1470&r=0.5625', numOfLikes: 245  }, 
        { name: 'Computer', url: 'https://pc-1.ru/pic/big/1247691.jpg', numOfLikes: 325  }, 
    ]

  return (
    <div className='col-5'>
      <h3 className='text-center'>Gallery</h3>
        {products.map(p => <Image key={p.name} url={p.url} numOfLikes={p.numOfLikes}/>)}
    </div>
  )
}

```
* Image.js
```js
import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import ImgContext from '../components/ImgContext'

export default function Image({ name, url, numOfLikes }) {

  const { AddToSavedImages } = useContext(ImgContext)
  console.log(url)

  return (
    <div onClick={() => AddToSavedImages(name, url, numOfLikes)} className='card'>
        <img src={url} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><FaHeart/>{numOfLikes}</p>
          <a href="#" className="btn btn-primary" onClick={()=>AddToSavedImages()}>Save</a>
        </div>
    </div>
  )
}

```
* SavedImages.js
```js
import React, { useContext } from 'react'
import ImgContext from './ImgContext'
import { FaHeart } from 'react-icons/fa'

export default function SavedImages() {

  const { savedImages } = useContext(ImgContext);

  return (
    <div>
      <h2>Saved images</h2>
      {savedImages.map(i => 
        <div className='card col-3'>
        <img src={i.url} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{i.name}</h5>
          <p className="card-text"><FaHeart/>{i.numOfLikes}</p>
        </div>
        </div>
      )}
    </div>
  )
}


```

