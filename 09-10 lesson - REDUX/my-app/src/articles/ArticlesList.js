import React from 'react'
import { useSelector } from 'react-redux'
// 1. import 
import { Link } from 'react-router-dom'

export default function ArticlesList() {

    const articles = useSelector(state => state.articles);

    return (
        <div>
            {articles.map(article => (
                <div key={article.id} className='card'>
                    <div className='card-body'>
                    <h3 className='card-title'>{article.title}</h3>
                    <p className='card-text'>{article.content}</p>

                    {/* Add a link to view that article */}
                    <Link to={`/articles/${article.id}`} className='btn btn-primary'
                    >View article</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}