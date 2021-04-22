import axios from 'axios';
const baseUrl = "http://localhost:8585";

function getProductById(productId) {
    const url = baseUrl + "/c/products/byid/" + productId;
    console.log(url);
    const promise = axios.get(url);
    console.log("inside axios method");
    console.log(promise);
    return promise;
}

function getCustomerById(customerId) {
    const url = baseUrl + "/c/customers/byid/" + customerId;
    console.log(url);
    const promise = axios.get(url);
    console.log("inside axios method");
    console.log(promise);
    return promise;
}
export {getProductById, getCustomerById};
