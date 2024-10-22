import React from 'react';

const ToDoBody = ({todos}) => {

    let renderTasks = todos.map((task) => {
        return <li key={task.id}>{task.title}</li>
    });
   
    return(
        <section className='todo-body'>
            <ul className="todo-list">
                {
                    todos.length !== 0
                        ? 
                        renderTasks 
                        : 
                        "No tasks. Add a task."                }
            </ul>
        </section>

    );
}

export default ToDoBody;