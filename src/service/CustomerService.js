import axios from 'axios';

const baseUrl = "http://localhost:8585"

function addCustomer(data){
    const url = baseUrl+"/p/customers/add";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.post(url, requestData);
    return promise;
}
export {addCustomer};