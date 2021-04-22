import axios from 'axios';

const baseUrl = "http://localhost:8585";

function updatePrice(data){
    const url = baseUrl+"/a/products/updateprice";
    let requestData = {productId: data.productId, newPrice: data.newPrice};
    const promise = axios.put(url, requestData);
    return promise;
}

export {updatePrice};