import React from 'react';

const TasksLeft = ({tasks}) => {

    return(
        <footer className='footer'>
            {tasks.length !== 1 
            ? 
            `${tasks.length} items left` : 
            `${tasks.length} item left`}
        </footer>
    );
}

export default TasksLeft;