import { getCustomerByUsername } from "../../service/CustomerService";
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
    console.log("Action method called");

    const promise = getCustomerByUsername(data.username);
    console.log("details from submit handler: ", data);
    
    promise.then((response) => {
      store.dispatch(displayCustomerByUsernameSuccess(response.data));

      console.log("inside app.js promise.then");
      console.log("the response getCustomerById is:", response.data);
    })
      .catch((error) => {
        console.log(error.message)
        store.dispatch(displayCustomerByUsernameFail(error));
      });
  }
}