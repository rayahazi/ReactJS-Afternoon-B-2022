import { createSlice, nanoid } from "@reduxjs/toolkit";

// first state for the articles:
const initialState = [
    {id: nanoid(), title:'article 1', content:'about tigers'},
    {id: nanoid(), title:'article 2', content:'about dolphins'},
];

const articlesSlice = createSlice({
    name:'articles',
    initialState,
    reducers: {
        articleAdded(state, action){
            state.push(action.payload)
        },

        // Create new reducer function for UPDATE
        articleUpdated(state, action){
            // destructuring
            const { id, title, content } = action.payload; 
            // find which article to update - by id
            const existingArticle = state.find(article => article.id === id);
            if(existingArticle){
                existingArticle.title = title;
                existingArticle.content = content;
            }
        }

    }
})

// export the function so we can add new article from any place in our app
export const { articleAdded, articleUpdated } = articlesSlice.actions;

export default articlesSlice.reducer;