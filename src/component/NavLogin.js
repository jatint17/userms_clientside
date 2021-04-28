import { isLoggedIn } from "../service/authService";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/login/loginActions";


export default function NavLogin({loggedIn}) {

 
  let response = useSelector((state) => {
    const responseObj = ({

        successMsg: state.login.successMsg,
        error: state.login.error
    });

    return responseObj;
});

const history = useHistory();  
const dispatch = useDispatch();

  const logoutHandler=(event)=>{
    event.preventDefault();
    dispatch(logoutAction(history));
  }

  return (

    <div>
      {response.successMsg ? (
        <li className="nav-item">
          <button onClick={logoutHandler} className="nav-link btn btn-link" >


            <span>Logout</span>
          </button>
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