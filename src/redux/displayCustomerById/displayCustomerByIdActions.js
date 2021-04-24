import store from "../store";
import displayCustomerByIdConstants from "./displayCustomerByIdConstants";

export function displayCustomerByIdSuccess(user) {
  return ({
    user: user,
    error: '',
    type: displayCustomerByIdConstants.success
  });
}

export function displayCustomerByIdFail(error) {
  return( {
    user: undefined,
    error: error,
    type: displayCustomerByIdConstants.fail
  });
}

export function displayCustomerByIdAction(data) {
  return () => {
    const mockUser = { customerId:20, username:"customer" };
    console.log(data);
    store.dispatch(displayCustomerByIdSuccess(mockUser));
  }
}