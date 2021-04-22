import axios from 'axios';

const baseUrl = "http://localhost:8585";

function addAdmin(data){
    const url = baseUrl+"/a/admin/add";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.post(url, requestData);
    return promise;
}

/*function addCustomer(data){
    const url = "/p/customers/add";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.post(url, requestData);
    return promise;
}*/
//export {addAdmin};

function getUserById(userId) {
    const url = baseUrl + "/c/users/byid/" + userId;
    console.log(url);
    const promise = axios.get(url);
    console.log("inside axios method");
    console.log(promise);
    return promise;
}

function checkCredentials(username, password) {
    const url = baseUrl + `/p/users/checkcredentials/${username}:${password}`;
    const promise = axios.get(url);
    return promise;
}

function DisplayUserOnRequest(username) {
    const url = baseUrl + "/p/users/byusername/"+username;
    const promise = axios.get(url);
    return promise;
}

export {getUserById, checkCredentials, DisplayUserOnRequest, addAdmin};
