import axios from 'axios';


const baseUrl = "http://localhost:8585"

function addProduct(data){
    const url = baseUrl + "/a/products/add";
    let requestData = {productName: data.productName, price: data.price};
    const promise = axios.post(url, requestData);
    return promise;
}

function updatePrice(data){
    const url = baseUrl+"/a/products/updateprice";
    let requestData = {productId: data.productId, newPrice: data.newPrice};
    const promise = axios.put(url, requestData);
    return promise;
}

export {updatePrice, addProduct};
