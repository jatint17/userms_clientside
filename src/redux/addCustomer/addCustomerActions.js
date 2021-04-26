import { addCustomer } from "../../service/CustomerService";
import store from "../store";
import addCustomerConstants from "./addCustomerConstants";

export function addCustomerSuccess(user) {
    return {
        user: user,
        error: '',
        type: addCustomerConstants.success
    }
}
export function addCustomerFail(error) {
    return {
        user: undefined,
        error: error,
        type: addCustomerConstants.fail
    }
}
export function addCustomerAction(data) {
    return () => {

        let requestData = {username: data.username, password: data.password};
        console.log(data);
        const promise = addCustomer(requestData)
        promise.then((response) => {
            store.dispatch(addCustomerSuccess(response.data));

            console.log("inside app.js updateBalance promise.then");
            console.log("the response is:", response.data);
        })
            .catch(error => {
                console.log(error.message)
                store.dispatch(addCustomerFail(error))
            });
    }
}