import React from 'react'
import '../../styles/UserInput.css'
import { postData } from '../lib/actions'


const UserInput = ({toDo, setToDo, setTasks, userName, setUsername}) => {
    
    // Validate user input  (toDo variable stores input in real time)
    const validateInput = () => {
        if (toDo === ""){
            alert("Please add a task.");
        }
        else{
            addATask();
            setToDo("");
        }
        
    }

    // Create the task object
    
    const addATask = () => {
        // display on the console the todo string written in the textbox
        // console.log("Creating a new todo: ", todo)
        
        // create a new object with id, title, and done keys
        let newTaskItem = {
            label: toDo,
            is_done: false
        }
        postData(userName, setTasks, setUsername, newTaskItem);
        setToDo("")
    };
    

    // get input ( -> string ) ==> add to array ==> set as a todo    
    return (
        <div className="userInput row">
            <div className="task col-10">
                {/* input's task is to update the todo variable (string) string -> add to array ->*/}
                <input 
                    className='taskEntry'
                    type="text"
                    placeholder="What needs to be done?"
                    onChange={e => setToDo(e.target.value)}
                    value={toDo}
                />
                
            </div>
            <div className="button col-2">
                <button className='AddATask' onClick={validateInput}>Add Task</button>
            </div>
        </div>
    );
        
}

export default UserInput