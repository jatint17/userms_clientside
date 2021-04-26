import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginAction } from "../redux/login/loginActions";
import validationConstants from "../validationConstants"
import NavLogin from "./NavLogin";

export default function Login() {


    let initialState = {
        username: undefined, password: undefined,
        successMsg: undefined,
        validations: { username: undefined, password: undefined }

    };
    let [currentState, setNewState] = useState(initialState);

    let response = useSelector((state) => {
        const responseObj = ({

            successMsg: state.login.successMsg,
            error: state.login.error
        });
        return responseObj;
    });

    let dispatch = useDispatch();
    const history = useHistory();

    let usernameRef = React.createRef();
    let passwordRef = React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(response.user);

        let data = { ...currentState }
        dispatch(loginAction(data, history));

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


    return (
        <div style={{ paddingBottom: '50px' }}>
            <h3>Login Form</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter username: </label>
                        <input type="text" ref={usernameRef} name="username" onChange={() => setFieldVal(usernameRef)} className="form-control" />
                    </div>

                    {currentState.validations.username ? (
                        <div className="text-danger">
                            {currentState.validations.username}
                        </div>
                    ) : ''}

                    <div className="form-group">
                        <label>Enter password: </label>
                        <input type="password" ref={passwordRef} name="password" onChange={() => setFieldVal(passwordRef)} className="form-control" /><br />
                    </div>

                    {currentState.validations.password ? (
                        <div className="text-danger">
                            {currentState.validations.password}
                        </div>
                    ) : ''}

                    <button className="btn btn-primary">Login</button>
                </form>

            </div>

            {response.successMsg ? (''

            ) : ''}

            {response.error ? (
                <div className="text-danger">
                    {response.error.message}
                </div>
            ) : ''}


        </div>
    );
}