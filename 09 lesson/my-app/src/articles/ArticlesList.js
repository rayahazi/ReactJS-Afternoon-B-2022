import React from 'react'
import { useSelector } from 'react-redux'

export default function ArticlesList() {

    const articles = useSelector(state => state.articles);

    return (
        <div>
            {articles.map(article => (
                <div key={article.id} className='card'>
                    <div className='card-body'>
                    <h3 className='card-title'>{article.title}</h3>
                    <p className='card-text'>{article.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
