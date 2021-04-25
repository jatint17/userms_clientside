import axios from 'axios';


const baseUrl = "http://localhost:8585"

function addProduct(data) {
    const url = baseUrl + "/a/products/add";
    let requestData = { productName: data.productName, price: data.price };
    const promise = axios.post(url, requestData, { withCredentials=true });
    return promise;
}

function getProductById(productId) {
    const url = baseUrl + "/c/products/byid/" + productId;
    console.log(url);
    const promise = axios.get(url, { withCredentials=true });
    console.log("inside axios method");
    console.log(promise);
    return promise;
}

export { getProductById, addProduct };
