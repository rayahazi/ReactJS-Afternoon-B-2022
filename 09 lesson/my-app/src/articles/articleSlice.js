import { createSlice } from "@reduxjs/toolkit";

// first state for the articles:
const initialState = [
]

// Make reducer function with initial data
const articlesSlice = createSlice({
    name:'articles',
    initialState,
    // Add a function to add a new article
    reducers: {
        articleAdded(state, action){
            state.push(action.payload)
        }
    }
})

// export the function so we can add new article from any place in our app
export const { articleAdded } = articlesSlice.actions;

export default articlesSlice.reducer;