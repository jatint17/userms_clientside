import store from "../store";
import updateBalanceConstants from "./updateBalanceConstants";
import { updateBalance } from '../../service/CustomerService';

export function updateBalanceSuccess(customer) {

    return ({
            customer: customer,
            error:'',
            type: updateBalanceConstants.success
        });
}

export function updateBalanceFail(error) {
    return ({
        customer: undefined,
        error: error,
        type: updateBalanceConstants.fail
    })
}

export function updateBalanceAction(data) {

    return ()=> {
        // const promise = updateBalance(data);
        // promise.then((response) => {
        // const customer = response.data;
        const customer = {userId: 15, username: "user15", balance: "1325"};
        console.log("Action method called");
        console.log("mock customer: ", customer);
        console.log("details from submit handler: ",data);
        store.dispatch(updateBalanceSuccess(customer));//dispatching action object
    // })
    //     .catch((error) => {
    //         console.log(error.message);
    //         const errorMsg = error.message;
    //         store.dispatch(updateBalanceFail(errorMsg));
    //     });
    }
}    