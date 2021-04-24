import store from "../store";
import findUserByUsernameConstants from "./findUserByUsernameConstants ";

export function findUserByUsernameSuccess(user) {
  return ({
    user: user,
    error: '',
    type: findUserByUsernameConstants.success
  });
}

export function findUserByUsernameFail(error) {
  return( {
    user: undefined,
    error: error,
    type: findUserByUserNameConstants.fail
  });
}

export function findUserByUsernameAction(date) {
  return () => {
    const mockCustomer = { username:"username", password:"password1" };
    store.dispatch(findUserByUsernameSuccess(mockCustomer));
  }
}