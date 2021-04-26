import store from "../store";
import displayAdminByIdConstants from "./displayAdminByIdConstants";
import { getAdminById } from "../../service/AdminService";

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
        console.log("Action method called");
        console.log("details from submit handler: ", data);

        const promise = getAdminById(data.adminId);
        promise.then((response) => {
            store.dispatch(displayAdminByIdSuccess(response.data));

            console.log("inside app.js promise.then");
            console.log("the response getUserById is:", response.data);
        })
            .catch((error) => {
                console.log(error.message);
                store.dispatch(displayAdminByIdFail(error.message));
            });
    }
}