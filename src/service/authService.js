import axios from 'axios';

const baseUrl = "http://localhost:8585";

function login(username, password) {
    const url = baseUrl + "/login";

    //form-data
    let data = "username=" + username + "&password=" + password;

    //{withCredentials:true} should be mentioned in every request where there is authentication
    const promise = axios.post(url, data, {withCredentials:true});
    return promise;
}

function  withCredentials(){
    if(isLoggedIn()){
        return { withCredentials: true };
    }
    return { withCredentials: false };
}

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