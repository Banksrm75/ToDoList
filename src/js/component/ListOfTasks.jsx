import React from "react";
import '../../styles/ListOfTasks.css'
import { getData, deleteTask } from "../lib/actions";

const ListOfTasks = ({tasks, setTasks, userName, setUsername}) => {
    
    
        
    let renderTasks = tasks.map((task) => {
        return (
            <li className='list-group-item' key={task.id}>
                <label className="task col-10" >{task.label}</label>
                <button className='deleteButton col-2' 
                        onClick={() => deleteTask(task.id, setTasks, userName, setUsername)}>
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
