import axios from 'axios';


const baseUrl = "http://localhost:8585"

function addCustomer(data){
    const url = baseUrl+"/p/customers/add";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.post(url, requestData);
    return promise;
}


function updateBalance(data){
    const url = baseUrl+"/a/customers/updatebalance";
    let requestData = {customerId: data.customerId, newBalance: data.newBalance};
    const promise = axios.put(url, requestData);
    return promise;
}

export function login(data){
    const url = baseUrl+"/login";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.put(url, requestData);
    return promise;
}

export {updateBalance, addCustomer};

