import React, { useState } from 'react'
import { doc, addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function AddTask( {onClose} ) {

  // Allow the user to edit 2 fields for each task:
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            // addDoc(collection, new document) - add a new document to the collection
            await addDoc(collection(db, 'tasks'), {
                title: title, 
                description: description, 
                completed: false, 
                created: Timestamp.now()
            })
            onClose();
        } catch (error) {alert(error)}
    }

  return (
    <div style={{backgroundColor:'lightgray', padding:10, marginTop:5}}>
        <form onSubmit={handleSubmit}>

            <label>Enter title</label>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} 
            className='form-control' value={title}/>

            <label>Enter description</label>
            <textarea type='text' onChange={(e)=>setDescription(e.target.value)} 
            className='form-control' value={description}></textarea>

            <br/>

            <button type='submit' className='btn btn-success'>Add a new task</button>

        </form>
    </div>
  )
}
