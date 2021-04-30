import addAdminConstants from "./addAdminConstants";
import store from "../store";
import { addAdmin } from "../../service/AdminService";
export function addAdminSuccess(user) {
    return ({
        user: user,
        error: '',
        type: addAdminConstants.success
    }
    );
}

export function addAdminFail(error) {
    return ({
        user: undefined,
        error: error,
        type: addAdminConstants.fail
    }
    );

}

export function addAdminAction(data) {
    return () => {

        console.log(data);
        const promise = addAdmin(data);
        promise.then((response) => {
            store.dispatch(addAdminSuccess(response.data));

            console.log("inside app.js updateBalance promise.then");
            console.log("the response is:", response.data);
        })
            .catch(error => {
                console.log(error.message)
                store.dispatch(addAdminFail(error.message))
            });
    }
}
