# useContext hook - Products list: 

### 01 state: 


* App.js
```js
import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import Checkout from './components/Checkout';


export default function App() {
  return (
    <div className='container'> 
    <BrowserRouter>
    <Nav/>
      <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

```



* Nav.js
```js
import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillShopping } from 'react-icons/ai'

export default function Nav() {
  return (
    <nav className='navbar'>
        <Link to="/"><h1>Items</h1></Link>
        <Link to="/checkout">
            <div className='cart'>
                <AiFillShopping />
                <span>0</span>
            </div>
        </Link>
    </nav>
  )
}

```




* Products.js
```js
import React from 'react'
import Cart from './Cart'

export default function Products() {

    const products = [
        { name: 'shirt', price: 10 }, 
        { name: 'skirt', price: 100 }, 
        { name: 'jacket', price: 20 }, 
        { name: 'dress', price: 55 }
    ]

  return (
    <div>
        {products.map(p => <Cart name={p.name} price={p.price}/>)}
    </div>
  )
}

```


* Cart.js
```js
import React from 'react'
import { AiFillShopping } from 'react-icons/ai'
import { IoIosShirt } from 'react-icons/io'


export default function Cart({ name, price }) {

  return (
    <div className='card'>
        <div>
            <IoIosShirt />
        </div>
        <div className='purchase'>
            <h3>{name}</h3>
            <AiFillShopping/>
        </div>
        <h4>${price}</h4>
    </div>
  )
}

```







* Checkout.js
```js
import React from 'react'

export default function Checkout() {
  return (
    <div>Checkout</div>
  )
}

```


### 02 state: 


* Create: CartContext.js
```js
import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    return (
        <CartContext.Provider value={{ item: 1 }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
```

* App.js - add globally.
```js
import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import Checkout from './components/Checkout';
import { CartProvider } from './CartContext';

export default function App() {
  return (
    <div className='container'> 
    <CartProvider>
    <BrowserRouter>
    <Nav/>
      <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  )
}

```


* Nav.js - update span. 
```js
import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillShopping } from 'react-icons/ai'
import { useContext } from 'react'
import CartContext from '../CartContext'

export default function Nav() {

    const { item } = useContext(CartContext)
    // console.log(item);

  return (
    <nav className='navbar'>
        <Link to="/"><h1>Items</h1></Link>
        <Link to="/checkout">
            <div className='cart'>
                <AiFillShopping />
                <span>{item}</span>
            </div>
        </Link>
    </nav>
  )
}

```

* Now for real: CartProvider.js
```js
import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){

    const [items, setItems] = useState([]);

    const AddToCard = (name, price) => {
        setItems(prevState => [...prevState, { name, price }])
    }

    return (
        <CartContext.Provider value={{ items, AddToCard}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
```

* App.js
```js

```

* App.js
```js
```

* App.js
```js
```

* App.js
```js
```
* App.js
```js
```
* App.js
```js
```
* App.js
```js
```
* App.js
```js
```






