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
    const mockUser = { adminId: 12, username: "user12" };
    console.log(data);
    store.dispatch(displayAdminByUsernameSuccess(mockUser));
  }
}