import loginConstants from "./loginConstants";
import store from "../store";
import { login } from "../../service/authService";


export function loginSuccess(successMsg) {
    return ({
        successMsg: successMsg,
        error: '',
        type: loginConstants.success
    });
}

export function loginFail(error) {
    return ({
        successMsg: undefined,
        error: error,
        type: loginConstants.fail
    });

}

export function loginAction(data,history) {
    return () => {
        let promise = login(data.username, data.password);
        console.log(data);
        promise.then(response => {
            store.dispatch(loginSuccess(response.data));
            console.log("session id received=" + response.data);
            localStorage.setItem("username", data.username);
            console.log("Local storage username = ", localStorage.getItem("username"));
            history.push("/home");
            return true;
    
        }).catch(error => {
            console.log("login unsuccessful ", error.message);
            store.dispatch(loginFail(error));
            return false;
        });
  
        
    }
}