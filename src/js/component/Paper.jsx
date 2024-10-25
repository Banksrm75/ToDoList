import React, {useState} from 'react'
import '../../styles/Paper.css'

import UserInput from './UserInput.jsx';
import ListOfTasks from './ListOfTasks.jsx';
import TasksLeft from './TasksLeft.jsx';

const ToDo = () => {

    const [toDo, setToDo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(0);

    return(
        <div className="paper">
            <h1 className='title'>My To-Do List</h1>
            <UserInput 
                toDo={toDo}
                setToDo={setToDo}
                tasks = {tasks}
                setTasks = {setTasks}
                counter = {counter}
                setCounter = {setCounter}
            />
            <ListOfTasks 
                tasks = {tasks}
                setTasks = {setTasks}
            />
            <TasksLeft 
                tasks = {tasks}
            />
        </div>
    );
}

export default ToDo