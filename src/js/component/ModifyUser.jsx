import React from 'react'
import '../../styles/ModifyUser.css'
import { deleteUser, addUser } from '../lib/actions';

const ModifyUser = ({userName, setUserName}) => {
           
    return (
        <>
            <div className="useroptions">
            <button className='DeleteUser' onClick={() => deleteUser(userName, setUserName)}>Delete User</button>
            {/* <button className='ChangeUser' onClick={() => changeUser(userName, setUserName)}>Change User</button> */}
            <button className='AddUser' onClick={() => addUser(userName, setUserName)}>New User</button>
            </div>
            
        </>
        
    );
        
}

export default ModifyUser