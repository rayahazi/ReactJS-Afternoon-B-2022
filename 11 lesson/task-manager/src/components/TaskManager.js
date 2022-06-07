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


