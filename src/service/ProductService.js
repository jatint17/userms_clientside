import axios from 'axios';
import { withCredentials } from './authService';


const baseUrl = "http://localhost:8585"

/**
 * function to send request to the addProduct end point in ProductRestController of onlineshoppingms
 * @param data 
 * @returns promise
 */
function addProduct(data) {
    const url = baseUrl + "/a/products/add";
    let requestData = { productName: data.productName, price: data.price };
    const promise = axios.post(url, requestData,withCredentials());
    return promise;
}

/**
 * function to send request to the findById end point in ProductRestController of onlineshoppingms
 * @param productId 
 * @returns promise
 */
function getProductById(productId) {
    const url = baseUrl + "/c/products/byid/" + productId;
    console.log(url);
    const promise = axios.get(url, withCredentials());
    console.log("inside axios method");
    console.log(promise);
    return promise;
}

export { getProductById, addProduct };
