import React, {useState} from 'react'

import ToDoHeader from "./ToDoHeader.jsx";
import ToDoBody from "./ToDoBody.jsx";
import ToDoFooter from "./ToDoFooter.jsx"
import '../../styles/ToDo.css'







const ToDo = () => {

    
    const todoList = [
        { id: 1, title: 'Buy groceries', done: false },
        { id: 2, title: 'Clean the house', done: true },
        { id: 3, title: 'Finish homework', done: false },
        { id: 4, title: 'Pay electricity bill', done: true },
        { id: 5, title: 'Read a book', done: false }
        ];
    

    const [toDo, setToDo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div className="todo-app">
                <h1>todos</h1>  
                <ToDoHeader />
                <ToDoBody todos={todoList}/>
                <ToDoFooter todos={todoList}/>
            </div>
        </>
    );
}

export default ToDo;