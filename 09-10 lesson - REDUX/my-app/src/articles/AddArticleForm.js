import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { articleAdded } from './articleSlice';

export default function AddArticleForm() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    // 2. Activate functions:
    const dispatch = useDispatch();

    // 3. Create a function to save the new article to the global store:
    const onSaveArticleClicked = () => {
        if(title !== '' && content !== '')
            // [{id:, title: , content: }]
            dispatch(articleAdded( {id: nanoid(), title, content} ));
        
        // Reset the data after new article was added
        setTitle('');
        setContent('');
    }

  return (
    <div>
        <div style={{padding:10}} className='bg-light'>
            <h4 className='text-center'>Add new article</h4>
            <div className="input-group mb-3">
                <label className="input-group-text">Article title:</label>
                <input value={title} type='text' onChange={onTitleChanged} className='form-control'/>
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text">content:</label>
                <textarea value={content} type='text' onChange={onContentChanged} className='form-control'/>
            </div>

            {/* Call the function - to store article */}
            <button onClick={onSaveArticleClicked} className='btn btn-success'>Save article</button>
        </div>
        <br/>
    </div>
  )
}
