import axios from 'axios';
import { withCredentials } from './authService';

const baseUrl = "http://localhost:8585"

/**
 * function to send request to the addAdmin end point in adminController of onlineshoppingms
 * @param data 
 * @returns promise
 */
function addAdmin(data) {
    const url = baseUrl + "/a/admins/add";
    let requestData = { username: data.username, password: data.password };
    const promise = axios.post(url, requestData, withCredentials());
    return promise;
}

/**
 * function to send request to the findById end point in adminController of onlineshoppingms
 * @param adminId 
 * @returns promise
 */
function getAdminById(adminId) {
    const url = baseUrl + "/a/admins/byid/" + adminId;
    console.log(url);
    const promise = axios.get(url,withCredentials());
    console.log("inside axios method");
    console.log(promise);
    return promise;
}

export { getAdminById, addAdmin };
