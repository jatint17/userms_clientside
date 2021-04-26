import axios from 'axios';
import { withCredentials } from './authService';

const baseUrl = "http://localhost:8585"

function addAdmin(data) {
    const url = baseUrl + "/a/admins/add";
    let requestData = { username: data.username, password: data.password };
    const promise = axios.post(url, requestData, withCredentials());
    return promise;
}

function getAdminById(adminId) {
    const url = baseUrl + "/a/admins/byid/" + adminId;
    console.log(url);
    const promise = axios.get(url,withCredentials());
    console.log("inside axios method");
    console.log(promise);
    return promise;
}

function findByUsername(username) {
    const url = baseUrl + "/a/admins/byusername/" + username;
    const promise = axios.get(url,withCredentials());
    return promise;
}

export { getAdminById, findByUsername, addAdmin };
