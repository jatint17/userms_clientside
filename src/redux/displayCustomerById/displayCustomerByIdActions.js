import store from "../store";
import displayCustomerByIdConstants from "./displayCustomerByIdConstants";

export function displayCustomerByIdSuccess(customer) {
  return ({
    customer: customer,
    error: '',
    type: displayCustomerByIdConstants.success
  });
}

export function displayCustomerByIdFail(error) {
  return( {
    customer: undefined,
    error: error,
    type: displayCustomerByIdConstants.fail
  });
}

export function displayCustomerByIdAction(date) {
  return () => {
    const mockCustomer = { customerId:20, username:"customer" };
    store.dispatch(displayCustomerByIdSuccess(mockCustomer));
  }
}