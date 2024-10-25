import React from "react";
import '../../styles/ListOfTasks.css'

const ListOfTasks = ({tasks, setTasks}) => {

    const deleteTask = (selectedTask) => {
       
        selectedTask.done = true;
        let newArray = tasks.filter(task => task.done !== true);
        setTasks(newArray);
    }
    
    let renderTasks = tasks.map((task) => {
        return (
            <li className='list-group-item' key={task.id}>
                <label className="task col-10" >{task.title}</label>
                <button className='deleteButton col-2' 
                        onClick={() => deleteTask(task)}>
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
