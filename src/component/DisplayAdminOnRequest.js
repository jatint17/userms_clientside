import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import DisplayAdminDetails from './DisplayAdminDetails';
import { useDispatch, useSelector } from 'react-redux';
import { displayAdminByIdAction } from '../redux/displayAdminById/displayAdminByIdActions'


export default function DisplayAdminOnRequest() {

    let adminIdRef = React.createRef();

    let initialState = { adminId: undefined, validations: { adminId: undefined } };
    let [currentState, setNewState] = useState(initialState);

    let response = useSelector((state) => {
        return ({
            admin: state.adminById.user,
            error: state.adminById.error
        });
    });

    const dispatch = useDispatch();

    let submitHandler = (event) => {
        event.preventDefault();

        if (currentState.validations.userId) {
            return;
        }
        console.log("inside submit handler");

        let data = { ...currentState };
        dispatch(displayAdminByIdAction(data));
    }

    let setFieldVal = (ref) => {
        let field = ref.current;
        let fieldName = field.name;
        let fieldVal = field.value;

        let validationMessage;
        if (ref === adminIdRef) {
            validationMessage = validateId(fieldVal);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = { ...currentState, [fieldName]: fieldVal, validations: validationState };
        setNewState(newState);
    }

    let validateId = (adminId) => {
        if (adminId < 0) {
            return validationMessage.idValidation;
        }
        return undefined;
    }


    return (
        <div>
            <h3>Find Admin Details by Id</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Admin Id: </label>
                        <input type="number" ref={adminIdRef} className="form-control col-md-4" name="adminId" onChange={() => setFieldVal(adminIdRef)} /><br />

                        <button className="btn btn-primary">Check</button>
                    </div>
                </form>

                {currentState.validations.adminId ? (
                    <div className="text-danger">
                        {currentState.validations.adminId}
                    </div>
                ) : ''}

            </div>

            {response.admin ? (
                <div className="text-success">
                    <h2>User Found:</h2>
                    <DisplayAdminDetails admin={response.admin} />
                </div>
            ) : ''}


            {response.error ? (
                <div className="text-danger">
                    {response.error}
                </div>
            ) : ''}

        </div>
    );
}