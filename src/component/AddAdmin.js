import React, { useState } from "react";
import DisplayUserDetails from "./DisplayUserDetails";
import validationConstants from "../validationConstants";
//import { addAdmin } from "../service/UserService";
import commonStyle1 from "./css/commonStyle1.module.css";


export default function AddAdmin() {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
 /* let mockAdmin = {
    userId: 1,
    username: "appu",
    password: "123456",
    role: "Customer",
  };*/
  const initialState = {
    username: undefined,
    password: undefined,
    validations: { username: undefined, password: undefined },
  };
  const response={admin: undefined, errorMsg: undefined};
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
    if (name.length < 4) {
      return validationConstants.passwordShorterThanFour;
    }
    return undefined;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(currentState.validations){
        return;
    }
  };

  return (
    <div className={commonStyle1.margintop30}>
      <h3>Enter new admin details</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>
            <b>Enter Username</b>
          </label>
          <input
            name="username"
            ref={usernameRef}
            placeholder="(min 5 characters)"
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
            placeholder="(min 4 characters)"
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

        <button className="btn btn-primary"> Create admin</button>
      </form>
      {response.admin ? (
        <div className={commonStyle1.margintop30} >
          <h4 className="text-success">Admin added</h4>
          <DisplayUserDetails user={response.admin} />
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
