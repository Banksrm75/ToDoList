import React from 'react';

const ToDoBody = ({tasks, setTasks}) => {

    const deleteTask = (selectedTask) => {
       
        selectedTask.done = true;
        let newArray = tasks.filter(task => task.done !== true);
        setTasks(newArray);
    }
    
    let renderTasks = tasks.map((task) => {
        return (
            <li className='list-item' key={task.id}>
                <label>{task.title}</label>
                <button className='deleteButton' onClick={() => deleteTask(task)}>X</button>
            </li>
        ) 
    });
   
    return(
        <section className='todo-body'>
            <ul className="todo-list">
                {
                    tasks.length !== 0
                        ? 
                        renderTasks 
                        : 
                        "No tasks. Add a task."                }
            </ul>
        </section>

    );
}

export default ToDoBody;