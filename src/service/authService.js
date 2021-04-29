import axios from 'axios';

const baseUrl = "http://localhost:8585";

/**
 * function that sends a login request to the backend server.
 * @param username 
 * @param password 
 * @returns promise
 */
function login(username, password) {
    const url = baseUrl + "/login";

    //form-data
    let data = "username=" + username + "&password=" + password;
    const promise = axios.post(url, data, {withCredentials:true});
    return promise;
}

/**
 * a function that passes credentials when user is logged in
 * @returns object
 */
function withCredentials(){
    if(isLoggedIn()){
        return { withCredentials: true };
    }
    return { withCredentials: false };
}

/**
 * gets the username from the browser local storage
 * @returns username
 */
function getLoginUserName() {
    const username = localStorage.getItem("username");
    return username;
}

function isLoggedIn() {
    const username = getLoginUserName();
    return (username ? true : false);
}


function logout() {
    const url = baseUrl + "/logout";
    localStorage.removeItem("username");

    const promise = axios.get(url, withCredentials());
    
    return promise;
}

export { login, isLoggedIn, logout, getLoginUserName , withCredentials};