import axios from 'axios';

const baseUrl = "http://localhost:8585"

function addAdmin(data) {
    const url = baseUrl + "/a/admins/add";
    let requestData = { username: data.username, password: data.password };
    const promise = axios.post(url, requestData, { withCredentials: true });
    return promise;
}

function getAdminById(adminId) {
    const url = baseUrl + "/a/admins/byid/" + adminId;
    console.log(url);
    const promise = axios.get(url, { withCredentials: true });
    console.log("inside axios method");
    console.log(promise);
    return promise;
}

function findByUsername(username) {
    const url = baseUrl + "/a/admins/byusername/" + username;
    const promise = axios.get(url, { withCredentials: true });
    return promise;
}

export { getAdminById, findByUsername, addAdmin };
