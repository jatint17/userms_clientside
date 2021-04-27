import React, { useState } from "react";
import validationConstants from "../validationConstants";
import commonStyle1 from "./css/commonStyle1.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction } from "../redux/addCustomer/addCustomerActions";
import DisplayCustomerDetails from "./DisplayCustomerDetails";

export default function AddCustomer() {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const initialState = {
    username: undefined,
    password: undefined,
    validation: { username: undefined, password: undefined },
  };
  const [currentState, setNewState] = useState(initialState);

  const response = useSelector((state) => {
    return (
      {
        customer: state.addCustomer.user,
        errorMsg: state.addCustomer.error
      }
    );
  });

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validation.username || currentState.validation.password) {
      return;
    }

    let data = { ...currentState };
    dispatch(addCustomerAction(data));

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
    if (username.length < 2) {
      return validationConstants.usernameShorterThanTwo;
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
    <div style={{ paddingBottom: '50px' }}>
      <form onSubmit={submitHandler}>
        <h2>Register yourself</h2>
        <h6>Sign Up</h6><br/>

        <div className="form-group">
          <label>
            Enter username:
          </label>
          <input
            name="username"
            ref={usernameRef}
            placeholder="(min 2 characters)"
            className="form-control  col-md-10"
            onChange={() => setFieldState(usernameRef)}
            required
          />
        </div>

        {currentState.validation.username ? (
          <div className="text-danger">
            {currentState.validation.username}
          </div>
        ) : (
          ""
        )}

        <div className="form-group">
          <label>
            Enter password:
          </label>
          <input
            name="password"
            type="password"
            ref={passwordRef}
            placeholder="(min 4 characters)"
            className="form-control  col-md-10"
            onChange={() => setFieldState(passwordRef)}
            required
          />
        </div><br/>

        {currentState.validation.password ? (
          <div className="text-danger">
            {currentState.validation.password}
          </div>) : ''}

        <button className="btn btn-primary">Register</button>

        {response.customer ? (
          <div className={commonStyle1.margintop30}>
            <h4 className="text-success">Customer added</h4>
            <DisplayCustomerDetails customer={response.customer} />
          </div>
        ) : (
          ""
        )}

        {response.errorMsg ? (
          <div className="text-danger">
            Sorry, your request could not be processed
            <br />
            {response.errorMsg.message}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
