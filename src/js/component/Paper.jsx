import React, {useState, useEffect} from 'react'
import '../../styles/Paper.css'

import UserInput from './UserInput.jsx';
import ListOfTasks from './ListOfTasks.jsx';
import TasksLeft from './TasksLeft.jsx';
import DeleteUser from './AddAndDeleteUser.jsx';

const ToDo = () => {

    const [userName, setUsername] = useState("")
    const [toDo, setToDo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(0);

    // creating a useEffect hook that renders only on the FIRST RENDER
    // the [] are called the dependency array which are needed to 
    //          render only ONE time. (Without them it will re-render
    //          INDEFINITELY!!)
    useEffect(() => {

        // use our fetch to retrieve our todo list in the playground!
        const getData = async () => {
            const response = await fetch(`https://playground.4geeks.com/todo/users/Banksrm`);
            if (response.ok) {
                const data = await response.json();
                setTasks(data.todos)
                setUsername(data.name)
            } else {
                console.log('error: ', response.status, response.statusText);
                /* Handle the error returned by the HTTP request */
                return {error: {status: response.status, statusText: response.statusText}};
            };
        };

        getData();
    }, [])

    return(
        <>
            <div className="paper">
                <h1 className='title'>{userName}'s</h1>
                <h1 className='title'>To-Do List</h1>
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
            <div className="users">
            <DeleteUser 
                userName = {userName}
                />
                {/* <NewUser /> */}
            </div>
       
            
        </>
       
    );
}

export default ToDo