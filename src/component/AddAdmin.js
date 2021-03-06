import React, { useState } from "react";
import validationConstants from "../validationConstants";
import commonStyle1 from "./css/commonStyle1.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addAdminAction } from "../redux/addAdmin/addAdminActions";
import DisplayAdminDetails from "./DisplayAdminDetails";
import { isLoggedIn } from "../service/authService";

/**
 * component for adding an admin(accessible only by an admin);
 * inputs new username and password from the user and dispatches the addAdmin action 
 */
export default function AddAdmin() {
  
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const initialState = {
    username: undefined,
    password: undefined,
    validations: { username: undefined, password: undefined },
  };

  const response = useSelector(state => {
    return (
      { admin: state.addAdmin.user, errorMsg: state.addAdmin.error });
  });

  const [currentState, setNewState] = useState(initialState);

  const dispatch = useDispatch();

  const setFieldState = (reference) => {
    const fieldName = reference.current.name;
    const fieldValue = reference.current.value;
    let validationMsg;
    if (reference === usernameRef) {
      validationMsg = validateUsername(fieldValue);
    }
    if (reference === passwordRef) {
      validationMsg = validatePassword(fieldValue);
    }
    let newValidationObj = {
      ...currentState.validations,
      [fieldName]: validationMsg,
    };
    setNewState({
      ...currentState,
      [fieldName]: fieldValue,
      validations: newValidationObj,
    });
  };

  const validateUsername = (name) => {
    if (name.length < 0) {
      return validationConstants.usernameShorterThanTwo;
    }
    return undefined;
  };

  const validatePassword = (name) => {
    if (name.length < 4) {
      return validationConstants.passwordShorterThanFour;
    }
    return undefined;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.username || currentState.validations.password) {
      return;
    }
    let data = { ...currentState };
    dispatch(addAdminAction(data));

  };

  return (
    <div style={{ paddingBottom: '50px' }}>
      <h2>Enter new admin details</h2>
      <h6>Only an admin can add an admin</h6><br/>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>
            Enter Username:
          </label>
          <input
            name="username" ref={usernameRef} placeholder="(min 2 characters)" className="form-control col-md-10"
            onChange={() => setFieldState(usernameRef)}  />
        </div>

        {currentState.validations.username ? (
          <div className="text-danger">{currentState.validations.username}</div>
        ) : (
          ""
        )}

        <div className="form-group">
          <label>
            Enter Password:
          </label>
          <input name="password" type="password" ref={passwordRef} placeholder="(min 4 characters)" className="form-control col-md-10"
            onChange={() => setFieldState(passwordRef)} required /><br/>
        </div>

        {currentState.validations.password ? (
          <div className="text-danger">{currentState.validations.password}</div>
        ) : (
          ""
        )}

        <button className="btn btn-primary"> Create admin</button>
      </form>
      {response.admin ? (
        <div>
          <h4 className="text-success" style={{paddingTop:'20px'}}>Admin added</h4>
          <DisplayAdminDetails admin={response.admin} />
        </div>
      ) : (
        ""
      )}

      {response.errorMsg ? (
        <div className="text-danger">
          Sorry, your request could not be processed
          <br />
          {response.errorMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
