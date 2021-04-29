import axios from 'axios';
import { withCredentials } from './authService';


const baseUrl = "http://localhost:8585"

function addCustomer(data) {
    const url = baseUrl + "/p/customers/add";
    let requestData = { username: data.username, password: data.password };
    const promise = axios.post(url, requestData);
    return promise;
}

function getCustomerById(customerId) {
    const url = baseUrl + "/c/customers/byid/" + customerId;
    console.log(url);
    const promise = axios.get(url, withCredentials());
    console.log("inside axios method");
    console.log(promise);
    return promise;
}

export { getCustomerById, addCustomer};
