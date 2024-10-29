import React from 'react'
import '../../styles/AddAndDeleteUser.css'

const DeleteUser = ({userName, setUserName}) => {
    
    const deleteUser = (userName) => {
       
        // use fetch to delete user
        fetch(`https://playground.4geeks.com/todo/users/${userName}`, {
            method: "DELETE"
        })
   
        .then(() => console.log("Successfully Deleted"))
        .catch(error => console.log(error));
    }

    const addUser = () => {

        let newUserName = window.prompt ("What will your username be?");

       
        // use fetch to create user
        fetch(`https://playground.4geeks.com/todo/users/${newUserName}`, {
            method: "POST"
        })
   
        .then(() => console.log("Successfully Added"))
        .catch(error => console.log(error));
    }

    
    return (
        <>
            <div className="useroptions">
            <button className='DeleteUser' onClick={() => deleteUser(userName)}>Delete User</button>
            <button className='AddUser' onClick={() => addUser(userName)}>New User</button>
            </div>
            
        </>
        
    );
        
}

export default DeleteUser