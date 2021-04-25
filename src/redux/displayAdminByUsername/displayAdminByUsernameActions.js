import { findByUsername } from "../../service/AdminService";
import store from "../store";
import displayAdminByUsernameConstants from "./displayAdminByUsernameConstants";

export function displayAdminByUsernameSuccess(user) {
  return ({
    user: user,
    error: '',
    type: displayAdminByUsernameConstants.success
  });
}

export function displayAdminByUsernameFail(error) {
  return ({
    user: undefined,
    error: error,
    type: displayAdminByUsernameConstants.fail
  });
}

export function displayAdminByUsernameAction(data) {
  return () => {

    const promise = findByUsername(data);
    promise.then((response) => {
      console.log("inside app.js findByUsername promise.then");
      console.log("the response is:", response.data);    
      store.dispatch(displayAdminByUsernameSuccess(response.data));
    })
      .catch(error => {
        console.log(error.message);
        store.dispatch(displayAdminByUsernameFail(error));
      });
  }
}