import React, { useState } from "react";
import validationConstants from "../validationConstants";
import DisplayUserDetails from "./DisplayUserDetails";
import commonStyle1 from "./css/commonStyle1.module.css";

export default function AddCustomer() {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  // let mockCustomer = {userId: 1, username:"appu", password:"123456", role: "Customer"};
  const initialState = {
    username: undefined,
    password: undefined,
    validation: { username: undefined, password: undefined },
  };
  const [currentState, setNewState] = useState(initialState);
  const response = { customer: undefined, errorMsg: undefined };

  const submitHandler = (event) => {
    event.preventDefault();
  };

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
    setNewState({
      ...currentState,
      [fieldName]: fieldValue,
      validation: { ...currentState.validation, [fieldName]: validationMsg },
    });
  };

  const validateUsername = (username) => {
    if (username.length < 5) {
      return validationConstants.usernameShorterThanFive;
    }
    return undefined;
  };

  const validatePassword = (password) => {
    if (password.length < 4) {
      return validationConstants.passwordShorterThanFour;
    }
    return undefined;
  };

  return (
    <div className={commonStyle1.margintop30}>
      <form onSubmit={submitHandler}>
        <h3>Enter new customer details</h3>

        <div className="form-group">
          <label>
            <b>Enter username</b>
          </label>
          <input
            name="username"
            ref={usernameRef}
            placeholder="(min 5 characters)"
            className="form-control"
            onChange={() => setFieldState(usernameRef)}
            required
          />
        </div>

        {currentState.validation ? (
          <div className="text-danger">
            {currentState.validation.username}
            <br />
            {currentState.validation.password}
          </div>
        ) : (
          ""
        )}

        <div className="form-group">
          <label>
            <b>Enter password</b>
          </label>
          <input
            name="password"
            type="password"
            ref={passwordRef}
            placeholder="(min 4 characters)"
            className="form-control"
            onChange={() => setFieldState(passwordRef)}
            required
          />
        </div>

        <button className="btn btn-primary"> Create customer</button>

        {response.customer ? (
          <div className={commonStyle1.margintop30}>
            <DisplayUserDetails user={response.customer} />
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
      </form>
    </div>
  );
}
