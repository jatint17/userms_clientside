import store from "../store";
import displayCustomerByUsernameConstants from "./displayCustomerByUsernameConstants";

export function displayCustomerByUsernameSuccess(user) {
  return ({
    user: user,
    error: '',
    type: displayCustomerByUsernameConstants.success
  });
}

export function displayCustomerByUsernameFail(error) {
  return( {
    user: undefined,
    error: error,
    type: displayCustomerByUsernameConstants.fail
  });
}

export function displayCustomerByUsernameAction(data) {
  return () => {
    const mockUser = { customerId: 12, username: "olala"};
    console.log(data);
    store.dispatch(displayCustomerByUsernameSuccess(mockUser));
  }
}