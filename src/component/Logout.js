import { useEffect } from "react";
import {isLoggedIn, logout} from "../service/authService";


export default function Logout() {


    const result = isLoggedIn();
    console.log("isloggedin?",result);
    console.log(localStorage.getItem("username"));

    if(result) {
        logout();
        console.log("logout");
        console.log(isLoggedIn());
        console.log(localStorage.getItem("username"));
    }

    return (
        <div>You are logged out</div>
        );
    

}