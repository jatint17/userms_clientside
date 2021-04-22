import axios from 'axios';

const baseUrl = "http://localhost:8585";

function updateBalance(data){
    const url = baseUrl+"/a/customers/updatebalance";
    let requestData = {customerId: data.customerId, newBalance: data.newBalance};
    const promise = axios.put(url, requestData);
    return promise;
}

export {updateBalance};