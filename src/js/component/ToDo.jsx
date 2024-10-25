import React, {useState} from 'react'

import ToDoHeader from "./ToDoHeader.jsx";
import ToDoBody from "./ToDoBody.jsx";
import ToDoFooter from "./ToDoFooter.jsx"
import '../../styles/ToDo.css'


const ToDo = () => {
    
    const [toDo, setToDo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(0);
    

    return (
        <>
            <div className="todo-app">
                <h1>todos</h1>  
                <ToDoHeader 
                    toDo={toDo}
                    setToDo={setToDo}
                    tasks = {tasks}
                    setTasks = {setTasks}
                    counter = {counter}
                    setCounter = {setCounter}
                />
                <ToDoBody 
                    tasks = {tasks}
                    setTasks = {setTasks}
                />
                <ToDoFooter 
                    tasks = {tasks}
                />
            </div>
        </>
    );
}

export default ToDo;