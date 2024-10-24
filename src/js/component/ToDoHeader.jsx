import React from 'react'

const ToDoHeader = ({toDo, setToDo, tasks, setTasks, counter, setCounter}) => {

    // Validate user input  (toDo variable stores input in real time)
    const validateInput = () => {
        if (toDo === ""){
            alert("Please add a task.");
        }
        addATask();
        setToDo("");
    }

    // Create the task object
    // SPREAD OPERATOR inside setTasks to add task to existing list
    const addATask = () => {
        
        //create a new object with ids, title and done keys
        let newTask = { id: counter, title: toDo, done: false };

        console.log(newTask);
        // use setTasks to append to the tasks[] array
        setTasks([...tasks, newTask]);
        
        // increment the counter by 1
        setCounter(counter+1);
    }

    // get input ( -> string ) ==> add to array ==> set as a todo    
    return (
        <>
            <header className='todo-header'>
                {/* input's task is to update the todo variable (string) string -> add to array ->*/}
                <input 
                    type="text"
                    placeholder="What needs to be done?"
                    onChange={e => setToDo(e.target.value)}
                    value={toDo}
                />
                <button className='AddATask' onClick={validateInput}>Add Task</button>                       
            </header>
        </>
        
    );
}

export default ToDoHeader;