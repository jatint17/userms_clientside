import { useState } from "react";
import { useEffect } from "react";
import { isLoggedIn, logout } from "../service/authService";


export default function Logout() {

    
    const result = isLoggedIn();
    console.log("isloggedin?", result);
    console.log(localStorage.getItem("username"));

    let initialState = { success: undefined };
    
    let [currentState, setNewState] = useState(initialState);
    
    let doLogout = () => {
    const promise = logout();
    promise.then((response) => {
        let success = response.data;
        setNewState({ success: success }
        )
    })}

    useEffect(doLogout,[]);

    return (
        <div>
            {
                currentState.success ? (
                    <div>{currentState.success}</div>
                ) : ''
            }
        </div>
    )
}