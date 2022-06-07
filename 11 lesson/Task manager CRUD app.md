# Task manager CRUD app with firebase

CRUD:

* C - create
* R - read
* U - update
* D - delete

## 1. READ - get all the tasks from the db, and show them in the app

* firebase-config.js
```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 1. import firestore
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxflF_Y9OEAtnyAGW3RDh6rg5sb4Me7i8",
  authDomain: "taskmanager-c23ac.firebaseapp.com",
  projectId: "taskmanager-c23ac",
  storageBucket: "taskmanager-c23ac.appspot.com",
  messagingSenderId: "568324528102",
  appId: "1:568324528102:web:ae9d9c0d2aaf039d7ce827",
  measurementId: "G-YRB883236T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 2. Wrap the app with firestore
const db = getFirestore(app);
// 3. export it
export { db };
```

* Create a new folder - components
* inside it - create a new file `TaskManager.js` - and import it to App.js

```js
import React from 'react'
import TaskManager from './components/TaskManager'

export default function App() {
  return (
    <div>
      <TaskManager/>
    </div>
  )
}

```

* TaskManager.js
```js
import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config';
import Task from './Task';

export default function TaskManager() {

    // Array to store all the tasks from db:
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{

        // Get all the documents from the collection `tasks`
        const getTasks = async (db) => {
            // collection - a function that returns a collection(by db and collection name)
            const TasksCol = collection(db, 'tasks');

            // getDocs() - return all documents for our collection - tasks
            const tasksSnapshot = await getDocs(TasksCol);

            const tasksList = await tasksSnapshot.docs.map(doc => (
               {
                   id: doc.id,
                   // Retrieves all fields in the document as an Object.
                   data: doc.data()
               } 
            ))
            // [{id: 1, data: {title: , description: , completed: }}]
            setTasks(tasksList);
        }

        // call the function
        getTasks(db);
        // Add dependency - tasks - whenever tasks is updated - reload the page
    }, [tasks]);

  return (
    <div className='container'>

        <h2>Task manager</h2>

        {/* If array is not empty - loop over it and show each task: */}
        {tasks.length > 0 && tasks.map(task => (
            <div>
                <Task
                id={task.id}
                title={task.data.title}
                description={task.data.description}
                completed={task.data.completed}/>
            </div>
        ))}

    </div>
  )
}



```

* Task.js
```js
import React from 'react'

export default function Task({ id, title, description, completed }) {
  return (
    <div className='alert alert-info'>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

```

## 2. UPDATE - allow the user to edit a task
A user can edit: title, description

* Task.js
```js
import React, { useState } from 'react'
import EditTask from './EditTask';

export default function Task({ id, title, description, completed }) {

    const [edit, setEdit] = useState(false);

  return (
    <div className='alert alert-info'>
        <h3>{title}</h3>
        <p>{description}</p>

        <button className='btn btn-primary' onClick={()=>setEdit(true)}>Edit</button>

        {edit && <EditTask
        id={id}
        editTitle={title}
        editDesc={description}
        finishEdit={()=>setEdit(false)} />}
    </div>
  )
}


```

* EditTask.js
```js
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


```

## 3. DELETE 

Delete a document (task) from db - in Task.js
```js
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


```


## 4. CREATE - add a new task to our list

* TaskManager.js
```js
import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config';
import Task from './Task';
import AddTask from './AddTask';

export default function TaskManager() {

    // Array to store all the tasks from db:
    const [tasks, setTasks] = useState([]);
    const [addTask, setAddTask] = useState(false);

    useEffect(()=>{

        // Get all the documents from the collection `tasks`
        const getTasks = async (db) => {
            // collection - a function that returns a collection(by db and collection name)
            const TasksCol = collection(db, 'tasks');

            // getDocs() - return all documents for our collection - tasks
            const tasksSnapshot = await getDocs(TasksCol);

            const tasksList = await tasksSnapshot.docs.map(doc => (
               {
                   id: doc.id,
                   // Retrieves all fields in the document as an Object.
                   data: doc.data()
               } 
            ))
            // [{id: 1, data: {title: , description: , completed: }}]
            setTasks(tasksList);
        }

        // call the function
        getTasks(db);
        // Add dependency - tasks - whenever tasks is updated - reload the page
    }, [tasks]);

  return (
    <div className='container'>

        <h2>Task manager</h2>
        <p>Use firebase to sore your tasks</p>

        <button className='btn' style={{backgroundColor:'darkcyan'}}
        onClick={()=>setAddTask(true)}>Add a new task</button>

        {addTask && <AddTask onClose={()=>setAddTask(false)}/>}

        <br/>
        <br/>

        {/* If array is not empty - loop over it and show each task: */}
        {tasks.length > 0 && tasks.map(task => (
            <div>
                <Task
                id={task.id}
                title={task.data.title}
                description={task.data.description}
                completed={task.data.completed}/>
            </div>
        ))}

    </div>
  )
}




```


* AddTask.js
```js
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

```
