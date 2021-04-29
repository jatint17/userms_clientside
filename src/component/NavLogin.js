import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/login/loginActions";

/**
 * A component that changes the Login link to Logout link when the user logs in
 */
export default function NavLogin() {

 
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