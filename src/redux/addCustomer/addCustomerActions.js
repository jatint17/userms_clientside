import store from "../store";
import addCustomerConstants from "./addCustomerConstants";

export function addCustomerSuccess(user){
    return {
        user:user,
        error:'',
        type:addCustomerConstants.success
    }
}
export function addCustomerFail(error){
    return {
        user:undefined,
        error:error,
        type:addCustomerConstants.fail
    }
}
export function addCustomerAction(data){
    return ()=>{
        const mockCustomer = {customerId: 7, username:"mohit", balance:1500.0};
        console.log(data);
        store.dispatch(addCustomerSuccess(mockCustomer));
        //store.dispatch(addCustomerFail("heavy mistake...customer not added"));
    }
}