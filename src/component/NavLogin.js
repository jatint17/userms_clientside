import { isLoggedIn } from "../service/authService";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


export default function NavLogin() {

  let initialState = {loggedIn : true};
  let [currentState, setNewState] = useState(initialState);



  useEffect(() => {
    setNewState({loggedIn : false})},[]);


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
            <span>Login</span>
          </Link>
        </li>
      )}
    </div>

  );
}