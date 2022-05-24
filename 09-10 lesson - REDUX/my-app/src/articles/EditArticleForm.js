import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { articleUpdated } from './articleSlice';

export default function EditArticleForm() {

    // get the id from params
    const { articleId } = useParams();

    // Use the id from params - to get the full article object
    // state.articles -> is the array of articles (in redux)
    const article = useSelector(state => 
        state.articles.find(article => article.id === articleId))

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    // 2. Activate functions:
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 3. Create a function to save the new article to the global store:
    const onUpdateArticleClicked = () => {
        if(title !== '' && content !== '')
            // [{id:, title: , content: }]
            dispatch(articleUpdated( {id: articleId, title, content} ));
        
        // After update - go back to the article page
        navigate(`/articles/${articleId}`);

    }

    return (
    <div>
        <div style={{padding:10}} className='bg-light'>
            <h4 className='text-center'>Edit article</h4>
            <div className="input-group mb-3">
                <label className="input-group-text">Article title:</label>
                <input value={title} type='text' onChange={onTitleChanged} className='form-control'/>
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text">content:</label>
                <textarea value={content} type='text' onChange={onContentChanged} className='form-control'/>
            </div>

            {/* Call the function - to store article */}
            <button onClick={onUpdateArticleClicked} className='btn btn-success'>Update article</button>
        </div>
        <br/>
    </div>
    )
}
