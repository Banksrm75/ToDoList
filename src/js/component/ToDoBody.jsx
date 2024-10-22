import React from 'react';
import { render } from 'react-dom';

const ToDoBody = (todos) => {

    // Create the function to render the tasks here
    let renderTasks = todos.map(todo) => {
        return (
            <li>todo</li>
        )
    };

    return(
        <section className='todo-body'>
            <ul className="todo-list">
                {
                    // write a ternary such that if the length of the 
                    // todolist > 1, map() the tasks as <li>s.
                    // otherwise display "No tasks. Add a task."
                    todos.length !== 0
                        ? 
                        renderTasks 
                        : 
                        "No tasks. Add a task."

                    // Requires you to call a function to render the tasks

                }
            </ul>
        </section>

    );
}

export default ToDoBody;