
// use our fetch to retrieve our todo list in the playground!
export const getData = async (setTasks, userName) => {
    const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`);
    if (response.status === 404) {
        alert('Username not found. Please click on the "New User" button.');
    }
    else if (response.ok) {
        const data = await response.json();
        setTasks(data.todos)
        
    } 
    else {
        console.log('error: ', response.status, response.statusText);
        /* Handle the error returned by the HTTP request */
        return {error: {status: response.status, statusText: response.statusText}};
    };
};


export const postData = (userName, setTasks, setUsername, newTaskItem) => {

    let options = {
        method: 'POST',
        body: JSON.stringify(newTaskItem),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(`https://playground.4geeks.com/todo/todos/${userName}`, options)
    .then(response => {
        if (!response.ok) {
            if(response.status === 404) {
                console.log('Username not found. Please click on the "New User" button.');
            }
            else {
                throw Error(response.statusText)
            }
        }
        getData(setTasks, userName, setUsername);
        return response.json();
    })
    .catch(error => console.log("Error: ", error))
}

export const deleteTask = (selectedTaskID, setTasks, userName, setUsername) => {
       
    // use fetch to delete a task
    fetch(`https://playground.4geeks.com/todo/todos/${selectedTaskID}`, {
        method: "DELETE"
    })

    .then(response => {
        if (response.status === 204) {
            getData(setTasks, userName, setUsername);
        }
        })
    .catch(error => console.log(error));
}

export const deleteUser = (userName, setUsername) => {
       
    // use fetch to delete a user
    fetch(`https://playground.4geeks.com/todo/users/${userName}`, {
        method: "DELETE"
    })

    .then(response => {
        if (response.status === 204) {
            setUsername("")
            window.alert("User was deleted successfully.");
        }
        })
    .catch(error => console.log(error));
}

// export const changeUser = (userName, setUserName) => {

// }

export const addUser = (userName, setUsername) => {
        
    let newUserName = window.prompt ("What will your username be?");
        if (newUserName === ""){
            alert("Please enter your username.");
        }
        else {
            setUsername(newUserName)
        }
        // use fetch to post a new user    
        fetch(`https://playground.4geeks.com/todo/users/${userName}`, {
            method: "POST"
        })
        .then(response => {
            if (response.status === 201) {
                console.log("Username added successfully")
                
            }
            else if (response.statusText === 201) {
                console.log("Username added successfully")
                
            }
            else {
                console.log('error: ', response.status, response.statusText);
                /* Handle the error returned by the HTTP request */
                return {error: {status: response.status, statusText: response.statusText}};
            };
        })
        .then(postData)
        .catch(error => console.log(error));
}