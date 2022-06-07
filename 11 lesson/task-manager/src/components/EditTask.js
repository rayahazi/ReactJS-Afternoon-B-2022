import React, { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function EditTask({ id, editTitle, editDesc, finishEdit }) {

    // Allow the user to edit 2 fields for each task:
    const [title, setTitle] = useState(editTitle)
    const [description, setDescription] = useState(editDesc)

    const handleUpdate = async (e) => {
        // will prevent the page from reloading and not saving the data
        e.preventDefault();
        // doc() - will return a specific document by: database, collection, id
        const taskDocRef = doc(db, 'tasks', id);

        try {
            await updateDoc(taskDocRef, {
                title: title, 
                description: description
            })
            finishEdit()
        } catch (error) {alert(error)}
    }

  return (
    <div style={{backgroundColor:'lightgray', padding:10, marginTop:5}}>
        <form onSubmit={handleUpdate}>

            <label>Edit title</label>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} 
            className='form-control' value={title}/>

            <label>Edit description</label>
            <textarea type='text' onChange={(e)=>setDescription(e.target.value)} 
            className='form-control' value={description}></textarea>

            <br/>

            <button type='submit' className='btn btn-success'>Save changes</button>

        </form>
    </div>
  )
}
