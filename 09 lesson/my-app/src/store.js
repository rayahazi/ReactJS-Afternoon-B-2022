// npm i @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'
import articleSlice from './articles/articleSlice'

// A friendly abstraction over the standard Redux createStore() function.
export default configureStore({
    reducer:{
        articles: articleSlice,
    }
})
