import { Link } from "react-router-dom";
import { isLoggedIn } from "../service/authService";
import NavLogin from "./NavLogin";
import lock from "../lock.png"
import { useSelector } from "react-redux";

export default function NavBar() {

  
  
  let response = useSelector((state) => {
    const responseObj = ({

        successMsg: state.login.successMsg,
        error: state.login.error
    });

    return responseObj;
});


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">
          User Module
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

           { 
              response.successMsg?(
                <NavLogin loggedIn={true}/>
              ):
              <NavLogin loggedIn={false}/>
            }

            <li className="nav-item">
              <Link to="/admins/add" className="nav-link">
                <span>Add Admin</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/customers/add" className="nav-link">
                <span>Register</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products/add" className="nav-link">
                <span>Add Product</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/customers/byid" className="nav-link">
                <span>Find Customer</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products/byid" className="nav-link">
                <span>Find Product</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
