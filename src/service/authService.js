import axios from 'axios';

const baseUrl = "http://localhost:8585";

function login(username, password) {
    const url = baseUrl + "/login";

    //form-data
    let data = "username=" + username + "&password=" + password;

    //{withCredentials:true} should be mentioned in every request where there is authentication
    const promise = axios.post(url, data, { withCredentials: true });
    return promise;

    // promise.then(response => {
    //     console.log("session id received=" + response.data);
    //     localStorage.setItem("username", username);
    //     return true;

    // }).catch(error => {
    //     console.log("login unsuccessful ", error.message);
    //     return false;
    // });

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
    localStorage.removeItem("username");

}

export { login, isLoggedIn, logout, getLoginUserName };