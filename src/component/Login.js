import React, { useState } from "react";
import validationConstants from "../validationConstants"
import commonStyle1 from "./css/commonStyle1.module.css";

export default function Login() {

    let initialState = {
        username: undefined, password: undefined,
        validations: { username: undefined, password: undefined }
    };

    let response = { user: undefined, errorMesssage: undefined };

    let [currentState, setNewState] = useState(initialState);

    let usernameRef = React.createRef();
    let passwordRef = React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(response.user);
    }

    let setFieldVal = (ref) => {
        let field = ref.current;
        let fieldName = field.name;
        let fieldVal = field.value;

        let validationMessage;
        if (ref === usernameRef) {
            validationMessage = validateUsername(fieldVal);
        }
        if (ref === passwordRef) {
            validationMessage = validatePassword(fieldVal);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = { ...currentState, [fieldName]: fieldVal, validations: validationState };
        setNewState(newState);

    }

    const validateUsername = (username) => {
        if (username.length < 2) {
            return validationConstants.usernameShorterThanFive;
        }
        return undefined;
    }

    const validatePassword = (password) => {
        if (password.length < 4) {
            return validationConstants.passwordShorterThanFour;
        }
        return undefined;
    }


    //testing
    let user = { username: "user12", password: "password" };
    response = { user: user, errorMesssage: undefined };

    return (
        <div className={commonStyle1.margintop30}>
            <h3>Login Form</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter username: </label>
                        <input type="text" ref={usernameRef} name="username" onChange={() => setFieldVal(usernameRef)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter password: </label>
                        <input type="password" ref={passwordRef} name="password" onChange={() => setFieldVal(passwordRef)} className="form-control" />
                    </div>
                    <button className="btn btn-primary">Update Balance</button>
                </form>

                {currentState.validations ? (
                    <div className="text-danger">
                        {currentState.validations.username}
                        {currentState.validations.password}

                    </div>
                ) : ''}
            </div>

            {/* testing
            {((currentState.username === response.user.username) && (currentState.password === response.user.password)) ? (
                <div>Correct details</div>
            ) : ''} */}

            {response.user ? (
                <div className="text-success">
                    <h3>Entered details: </h3>
                    Username: {response.user.username}
                </div>
            ) : ''}

            {response.errorMesssage ? (
                <div className="text-danger">
                    errorMessage
                </div>
            ) : ''}
        </div>
    );
}