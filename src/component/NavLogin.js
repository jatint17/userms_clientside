import { isLoggedIn } from "../service/authService";
import { Link } from "react-router-dom";


export default function NavLogin() {
  return (
    <div>
      {isLoggedIn() ? (
        <li className="nav-item">
          <Link to="/logout" className="nav-link">
            <span>Logout</span>
          </Link>
        </li>
      ) : (
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <span>Log In</span>
          </Link>
        </li>
      )}
    </div>
  );
}
