import React from "react";
import '../../styles/ListOfTasks.css'

const ListOfTasks = ({tasks, setTasks}) => {

    const deleteTask = (selectedTask) => {
       
        // use fetch to delete a task
        fetch(`https://playground.4geeks.com/todo/todos/${selectedTask}`, {
            method: "DELETE"
        })
   
        .then(response => {
            if (response.ok) {
                let newArray = tasks.filter(task => task.id !== selectedTask);
                setTasks(newArray);
            }
            })
        .then(() => console.log("Successfully Deleted"))
        .catch(error => console.log(error));
    }
    
    let renderTasks = tasks.map((task) => {
        return (
            <li className='list-group-item' key={task.id}>
                <label className="task col-10" >{task.label}</label>
                <button className='deleteButton col-2' 
                        onClick={() => deleteTask(task.id)}>
                        Done
                    </button>
            </li>
        ) 
    });

    

    return(
        <>
            <ul className="list-group row">
                <li className='list-group-item ' key={99999999999999999}>
                    <label className="task col-10" ></label>
                </li>

                {
                    tasks.length !== 0
                        ? 
                        renderTasks 
                        : 
                        "--- No tasks. Add a task. ---"                  
                } 
            </ul>
        </>
    ); 
}

export default ListOfTasks
