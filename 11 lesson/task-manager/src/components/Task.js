import React, { useState } from 'react'
import EditTask from './EditTask';
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function Task({ id, title, description, completed }) {

    const [edit, setEdit] = useState(false);

    // Function to handle delete
    const handleDelete = async() => {
        // doc() - find specific document by id
        const taskDocRef = doc(db, 'tasks', id);
        try {
            // deleteDoc() - will get a document to delete from the collection
            await deleteDoc(taskDocRef)
        } catch (error) {alert(error) }
    }

  return (
    <div className='alert alert-info'>
        <h3>{title}</h3>
        <p>{description}</p>

        <button className='btn btn-primary' onClick={()=>setEdit(true)}>Edit</button>
        <button className='btn btn-danger' onClick={()=>handleDelete()}>Delete</button>

        {edit && <EditTask
        id={id}
        editTitle={title}
        editDesc={description}
        finishEdit={()=>setEdit(false)} />}
    </div>
  )
}

