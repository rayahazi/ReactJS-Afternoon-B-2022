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
