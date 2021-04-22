import axios from 'axios';

const baseUrl = "http://localhost:8585"
function addAdmin(data){
    const url = baseUrl+"/a/admin/add";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.post(url, requestData);
    return promise;
}

function addCustomer(data){
    const url = baseUrl+"/p/customers/add";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.post(url, requestData);
    return promise;
}

function addProduct(data){
    const url = baseUrl + "/a/products/add";
    let requestData = {productName: data.productName, price: data.price};
    const promise = axios.post(url, requestData);
    return promise;
}
export {addAdmin, addCustomer, addProduct};