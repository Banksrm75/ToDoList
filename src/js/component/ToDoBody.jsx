import React from 'react';

const ToDoBody = ({tasks, setTasks}) => {

    const deleteTask = (selectedTask) => {
       
        selectedTask.done = true;
        let newArray = tasks.filter(task => task.done !== true);
        setTasks(newArray);
    }
    
    let renderTasks = tasks.map((task) => {
        return (
            <li className='list-group-item' key={task.id}>
                <label>{task.title}</label>
                <button className='deleteButton' onClick={() => deleteTask(task)}>Done</button>
            </li>
        ) 
    });
   
    return(
        <section className='todo-body'>
            <ul className="list-group">
                <li className='list-group-item' key={99999}>
                    <label>Walk the dog</label>
                    <button className='deleteButton' onClick={() => deleteTask(task)}>Done</button>
                </li>
                <li className='list-group-item' key={99998}>
                    <label>Deliver hay to the horses</label>
                    <button className='deleteButton' onClick={() => deleteTask(task)}>Done</button>
                </li>
                {
                    tasks.length !== 0
                        ? 
                        renderTasks 
                        : 
                        "No tasks. Add a task."                
                }
            </ul>
        </section>

    );
}

export default ToDoBody;