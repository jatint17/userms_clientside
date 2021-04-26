import { isLoggedIn, getLoginUserName } from "../service/authService";
import DisplayAdminByUsername from "./DisplayAdminByUsername";
import DisplayCustomerByUsername from "./DisplayCustomerByUsername";

export default function Profile() {

    const result = isLoggedIn();
    console.log("Profile logged in?",result)
    if (result) {
        let username = getLoginUserName();
        return (
            <div>
                <h2>Profile</h2>
                Your username is {username} and you are logged in
            </div>
        )
    }
    return (
        <div>Please log in</div>
    );
}