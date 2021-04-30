import store from "../store";
import displayCustomerByIdConstants from "./displayCustomerByIdConstants";
import { getCustomerById } from "../../service/CustomerService";

export function displayCustomerByIdSuccess(user) {
  return ({
    user: user,
    error: '',
    type: displayCustomerByIdConstants.success
  });
}

export function displayCustomerByIdFail(error) {
  return ({
    user: undefined,
    error: error,
    type: displayCustomerByIdConstants.fail
  });
}

export function displayCustomerByIdAction(data) {
  return () => {
    console.log("Action method called");
    console.log("details from submit handler: ", data);

    const promise = getCustomerById(data.customerId);
    promise.then((response) => {
      store.dispatch(displayCustomerByIdSuccess(response.data));

      console.log("inside app.js promise.then");
      console.log("the response getCustomerById is:", response.data);
    })
      .catch((error) => {
        console.log("promise error",error.response.data)
        store.dispatch(displayCustomerByIdFail(error.response.data));
      });
  }
}