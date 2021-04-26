import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { isLoggedIn, logout } from "../service/authService";



export default function Logout() {


    const result = isLoggedIn();
    console.log("isloggedin?", result);
    console.log(localStorage.getItem("username"));

    let initialState = { success: undefined, loggedIn: undefined };

    let [currentState, setNewState] = useState(initialState);

    let doLogout = () => {
        const promise = logout();
        promise.then((response) => {
            let success = response.data;
            setNewState({ success: success, loggedIn: false })
        })

    }

    let history = useHistory();
    useEffect(doLogout, []);

    return (
        <div>
            {
                currentState.success ? (
                    <div>
                        "You have been logged out"
                        {history.push("/")} 
                    </div>
                ) : <div className="text-warning">You are not logged in, please log in first</div>
            }



        </div>
    )
}