import React, { useState } from 'react';
import validationMessage from '../validationMessage';

export default function FindById() {

    //let mockUser = { userId: "user", errorMessage: undefined };

    let userIdRef = React.createRef();

    let initialState = { userId: undefined, user: undefined, errorMessage: undefined, validations: { userId: undefined } };
    let [currentState, setNewState] = useState(initialState);

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
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>UserId: </label>
                        <input type="number" ref={userIdRef} name="userId" onChange={() => setFieldVal(userIdRef)} /><br />
                    </div>
                    <button>Check</button>
                </form>
                
                {currentState.validations.userId ? (
                <div>
                    {currentState.validations.userId}
                </div>
            ) : ''}

            </div>

            {currentState.user ? (
                <div>
                    <h2>User Found:</h2>
                    {currentState.user.username}
                </div>
            ) : ''}


            {currentState.errorMessage ? (
                <div style={{ color: 'red' }}>
                    Error Occurred: {currentState.errorMessage}
                </div>
            ) : ''}

        </div>
    );
}