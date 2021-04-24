import store from "../store";
import displayAdminByIdConstants from "./displayAdminByIdConstants";


export function displayAdminByIdSuccess(user) {
    return ({
        user: user,
        error: '',
        type: displayAdminByIdConstants.success
    });
}

export function displayAdminByIdFail(error) {
    return ({
        user: undefined,
        error: error,
        type: displayAdminByIdConstants.fail
    });
}

export function displayAdminByIdAction(data) {
    return () => {
        const mockUser = { adminId: 15, username: "user15" };
        console.log("Action method called");
        console.log("mock user: ", mockUser);
        console.log("details from submit handler: ",data);
        store.dispatch(displayAdminByIdSuccess(mockUser));
    }
}