import React, { useState } from "react";
import DisplayUserDetails from "./DisplayUserDetails";
import validationConstants from "../validationConstants";
import commonStyle1 from "./css/commonStyle1.module.css";


export default function AddAdmin() {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  let mockAdmin = {userId: 1, username:"appu", password:"123456", role: "Admin"};
  const initialState = {
    username: undefined,
    password: undefined,
    admin: mockAdmin,
    errorMsg: undefined,
    validations: { username: undefined, password: undefined },
  };
  const [currentState, setNewState] = useState(initialState);

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
      errorMsg: undefined,
      admin: undefined,
      validations: newValidationObj,
    });
  };

  const validateUsername = (name) => {
    if (name.length < 5) {
      return validationConstants.usernameShorterThanFive;
    }
    return undefined;
  };

  const validatePassword = (name) => {
    if (name.length < 8) {
      return validationConstants.passwordShorterThanEight;
    }
    return undefined;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit handler");
  };

  return (
    <div>
      <h3>Enter new admin details</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>
            <b>Enter Username</b>
          </label>
          <input
            name="username"
            ref={usernameRef}
            placeHolder="(min 5 characters)"
            className="form-control"
            onChange={() => setFieldState(usernameRef)}
            required
          ></input>
        </div>

        {currentState.validations.username ? (
          <div className="text-danger">{currentState.validations.username}</div>
        ) : (
          ""
        )}

        <div className="form-group">
          <label>
            <b>Enter Password</b>
          </label>
          <input
            name="password"
            type="password"
            ref={passwordRef}
            placeHolder="(min 8 characters)"
            className="form-control"
            onChange={() => setFieldState(passwordRef)}
            required
          ></input>
        </div>

        {currentState.validations.password ? (
          <div className="text-danger">{currentState.validations.password}</div>
        ) : (
          ""
        )}

        <button className="btn btn-primary"> Create Admin</button>
      </form>
      {currentState.admin ? (
        <div>
          <h4>Admin added</h4>
          <DisplayUserDetails user={currentState.admin} />
        </div>
      ) : (
        ""
      )}

      {currentState.errorMsg ? (
        <div className="text-danger">
          Sorry, your request could not be processed
          <br />
          {currentState.errorMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
