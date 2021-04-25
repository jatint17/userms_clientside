import {logout} from "../service/authService";

export default function Logout() {

    logout();

    return(
        <div>
            You are logged out
        </div>
    )

}