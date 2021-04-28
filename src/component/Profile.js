import { isLoggedIn, getLoginUserName } from "../service/authService";
import DisplayAdminByUsername from "./DisplayAdminByUsername";
import DisplayCustomerByUsername from "./DisplayCustomerByUsername";
import Login from "./Login";

export default function Profile() {

    const result = isLoggedIn();
    console.log("Profile logged in?",result)
    if (result) {
        let username = getLoginUserName();
        return (
            <div>
                <h2>Profile</h2>
                Your username is <b>{username}</b> and you are logged in
            </div>
        )
    }
    return (
        <div>
            <h6 style={{color:'#C36226'}}>Please log in to view your profile.</h6>
            <Login />
        </div>
    );
}