import React, {useState, useEffect} from 'react'
import '../../styles/Paper.css'

import UserInput from './UserInput.jsx';
import ListOfTasks from './ListOfTasks.jsx';
import TasksLeft from './TasksLeft.jsx';
import AddAndDeleteUser from './ModifyUser.jsx';
import { getData } from '../lib/actions.js';

const ToDo = () => {

    const [userName, setUsername] = useState("Banksrm")
    const [toDo, setToDo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(0);

    // creating a useEffect hook that renders only on the FIRST RENDER
    // the [] are called the dependency array which are needed to 
    //          render only ONE time. (Without them it will re-render
    //          INDEFINITELY!!)
    useEffect(() => {

        // use our fetch to retrieve our todo list in the playground!
        getData(setTasks, userName, setUsername);
    }, []);

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
                    userName = {userName}
                    setUserName = {setUsername}
                />
                <ListOfTasks 
                    tasks = {tasks}
                    setTasks = {setTasks}
                    userName = {userName}
                    setUserName = {setUsername}
                />
                <TasksLeft 
                    tasks = {tasks}
                />
            </div>
            <div className="users">
            <AddAndDeleteUser
                userName = {userName}
                setUserName = {setUsername}
                />
            </div>
       
            
        </>
       
    );
}

export default ToDo