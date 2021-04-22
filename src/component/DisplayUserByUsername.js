import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import DisplayUserDetails from './DisplayUserDetails'
import commonStyle1 from "./css/commonStyle1.module.css";
import {getUserById} from "../service/UserService"
import validationConstants from '../validationConstants';


export default function DisplayUserByUsername() {

    let mockUser = { username: "admin", password: "admin"};

    let usernameRef = React.createRef();

    let initialState = { username: undefined, validations: { username: undefined } };
    const response = { user: mockUser, errorMessage: undefined };

    let [currentState, setNewState] = useState(initialState);

    let submitHandler = (event) => {
        event.preventDefault();

        if (currentState.validations.username) {
            return;
        }
        console.log("inside submit handler", response.user);
    }

    let setFieldVal = (ref) => {
        let field = ref.current;
        let fieldName = field.name;
        let fieldVal = field.value;

        let validationMessage;
        if (ref === usernameRef) {
            validationMessage = validateUsername(fieldVal);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = { ...currentState, [fieldName]: fieldVal, validations: validationState };
        setNewState(newState);
    }

    let validateUsername = (username) => {
        if (username.length < 2) {
            return validationConstants.usernameShorterThanTwo;
        }
        return undefined;
    }


    return (
        <div>
            <h3>Find User Details by Id</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>username: </label>
                        <input type="text" ref={usernameRef} className="form-control col-md-4" name="username" onChange={() => setFieldVal(usernameRef)} /><br />

                        <button className="btn btn-primary">Check</button>
                    </div>
                </form>

                {currentState.validations.username ? (
                    <div className="text-danger">
                        {currentState.validations.username}
                    </div>
                ) : ''}

            </div>

            {response.user ? (
                <div className="text-success">
                    <h2>User Found:</h2>
                    <DisplayUserDetails user={response.user}/>
                </div>
            ) : ''}


            {response.errorMessage ? (
                <div className="text-danger">
                    {response.errorMessage}
                </div>
            ) : ''}

        </div>
    );
}