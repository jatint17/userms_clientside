import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginAction } from "../redux/login/loginActions";
import { login } from "../service/authService";
import validationConstants from "../validationConstants"

export default function Login() {

    let initialState = {
        username: undefined, password: undefined,
        validations: { username: undefined, password: undefined }
    };

    let response = useSelector((state) => {
        return ({
            successMsg: state.login.successMsg,
            error: state.login.error
        });
    });

    let dispatch = useDispatch();
    const history = useHistory();

    let [currentState, setNewState] = useState(initialState);

    let usernameRef = React.createRef();
    let passwordRef = React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(response.user);

        // const result = login(currentState.username, currentState.password);
        // console.log(result);
        let data = { ...currentState }
        dispatch(loginAction(data));

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

            {response.successMsg ? (
                history.push("/home")
            ) : ''}

            {response.error ? (
                <div className="text-danger">
                    {response.error.message}
                </div>
            ) : ''}
        </div>
    );
}