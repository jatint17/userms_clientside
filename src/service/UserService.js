import axios from 'axios';

const baseUrl = "http://localhost:8585"
function addAdmin(data){
    const url = baseUrl+"/a/admin/add";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.post(url, requestData);
    return promise;
}

/*function addCustomer(data){
    const url = "/p/customers/add";
    let requestData = {username: data.username, password: data.password};
    const promise = axios.post(url, requestData);
    return promise;
}*/
export {addAdmin};