import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import DisplayUserDetails from './DisplayUserDetails';
import {displayUserByIdAction} from '../redux/displayUserById/displayUserByIdActions'
import commonStyle1 from "./css/commonStyle1.module.css";
import { getUserById } from "../service/UserService"
import { useSelector, useDispatch } from 'react-redux';


export default function DisplayUserOnRequest() {

    //let mockUser = { userId: 17, username: "user", errorMessage: undefined };

    let userIdRef = React.createRef();

    let initialState = { userId: undefined, validations: { userId: undefined } };
    let [currentState, setNewState] = useState(initialState);

    let response = useSelector((state) => {
        return ({ 
            user: state.findById.user, 
            error: state.findById.error 
        });
    });

    const dispatch = useDispatch();

    let submitHandler = (event) => {
        event.preventDefault();

        if (currentState.validations.userId) {
            return;
        }
        console.log("inside submit handler");

        let data = {...currentState};
        dispatch(displayUserByIdAction(data));
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

        let newState = { ...currentState, [fieldName]: fieldVal, validations: validationState };
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

                        <button className="btn btn-primary">Check</button>
                    </div>
                </form>

                {currentState.validations.userId ? (
                    <div className="text-danger">
                        {currentState.validations.userId}
                    </div>
                ) : ''}

            </div>

            {response.user ? (
                <div className="text-success">
                    <h2>User Found:</h2>
                    <DisplayUserDetails user={response.user} />
                </div>
            ) : ''}


            {response.error ? (
                <div className="text-danger">
                    {currentState.error}
                </div>
            ) : ''}

        </div>
    );
}