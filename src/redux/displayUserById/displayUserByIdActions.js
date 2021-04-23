import store from "../store";
import displayUserByIdConstants from "./displayUserByIdConstants";


export function displayUserByIdSuccess(user) {
    return ({
        user: user,
        error: '',
        type: displayUserByIdConstants.success
    });
}

export function displayUserByIdFail(error) {
    return ({
        user: undefined,
        error: error,
        type: displayUserByIdConstants.fail
    });
}

export function displayUserByIdAction(data) {
    return () => {
        const mockUser = { userId: 15, username: "user15" };
        console.log("Action method called");
        console.log("mock user: ", mockUser);
        console.log("details from submit handler: ",data);
        store.dispatch(displayUserByIdSuccess(mockUser));
    }
}