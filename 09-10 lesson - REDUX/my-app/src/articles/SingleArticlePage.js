import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'



// When user presses the article -> redirect to article page:
// localhost:3000 -> localhost:3000/articles/:articleId

export default function SingleArticlePage() {

    // we want to get the id from params(of URL). 
    const { articleId } = useParams();

    // Use the id from params - to get the full article object
    // state.articles -> is the array of articles (in redux)
    const article = useSelector(state => 
        state.articles.find(article => article.id === articleId))

    if(!article){
        return <h2>Article was not found!</h2>
    }

  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{article.title}</h2>
        <p className='card-text'>{article.content}</p>

        <Link to={`/editArticle/${article.id}`} className='btn btn-primary'
        >Edit article</Link>
        </div>
    </div>
  )
}
