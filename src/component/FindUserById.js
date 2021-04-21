import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import commonStyle1 from "../commonStyle1.module.css";

export default function FindUserById() {

    //let mockUser = { userId: "user", errorMessage: undefined };

    let userIdRef = React.createRef();

    let initialState = { userId: undefined, user: undefined, errorMessage: undefined, validations: { userId: undefined } };
    let [currentState, setNewState] = useState(initialState);
    const response={user: undefined, errorMessage: undefined};

    let submitHandler = (event) => {
        event.preventDefault();

        if (currentState.validations.userId) {
            return;
        }
    }

    let setFieldVal = (ref) => {
        let field = ref.current;
        let fieldName = field.name;
        let fieldVal = field.value;

        let validationMessage;
        if (ref === userIdRef) {
            validationMessage = validateId(fieldVal);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = { ...currentState, [fieldName]: fieldVal, customer: undefined, errorMessage: undefined, validations: validationState };
        setNewState(newState);
    }

    let validateId = (userId) => {
        if (userId < 0) {
            return validationMessage.idValidation;
        }
        return undefined;
    }


    return (
        <div>
            <h3>Find User Details by Id</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>UserId: </label>
                        <input type="number" ref={userIdRef} className="form-control col-md-4" name="userId" onChange={() => setFieldVal(userIdRef)} /><br />

                        <button className={"btn btn-primary " + commonStyle1.buttoncolor}>Check</button>
                    </div>
                </form>

                {response.validations.userId ? (
                    <div className="text-danger">
                        {currentState.validations.userId}
                    </div>
                ) : ''}

            </div>

            {response.user ? (
                <div className="text-success">
                    <h2>User Found:</h2>
                    {currentState.user.username}
                </div>
            ) : ''}


            {response.errorMessage ? (
                <div className="text-danger">
                    Error Occurred: {currentState.errorMessage}
                </div>
            ) : ''}

        </div>
    );
}