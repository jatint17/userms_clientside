import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayCustomerByIdAction } from '../redux/displayCustomerById/displayCustomerByIdActions';
import validationMessage from '../validationMessage';
import DisplayCustomerDetails from './DisplayCustomerDetails';
/**
 * user enters the customerId in the form to view the details of the customer corresponding to the customerId 
 */

export default function DisplayCustomerOnRequest() {

    let customerIdRef = React.createRef();

    let initialState = { customerId: undefined, validations: { customerId: undefined } };
    let [currentState, setNewState] = useState(initialState);

    const response = useSelector((state) => {
        return ({
            customer: state.customerById.user,
            error: state.customerById.error
        }); 
    });

    let dispatch = useDispatch();

    let submitHandler = (event) => {
        event.preventDefault();

        if (currentState.validations.customerId) {
            return;
        }

        let data = { ...currentState };
        dispatch(displayCustomerByIdAction(data));
    }

    let setFieldVal = (ref) => {
        let field = ref.current;
        let fieldName = field.name;
        let fieldVal = field.value;

        let validationMessage;
        if (ref === customerIdRef) {
            validationMessage = validateId(fieldVal);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = { ...currentState, [fieldName]: fieldVal, validations: validationState };
        setNewState(newState);
    }

    let validateId = (customerId) => {
        if (customerId < 0) {
            return validationMessage.idValidation;
        }
        return undefined;
    }


    return (
        <div>
            <h2>Find Customer Details By Id</h2>
            <h6>Only logged in users can use this feature</h6><br/>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label >Customer ID: </label>
                        <input type="number" ref={customerIdRef} className="form-control  col-md-8" name="customerId" onChange={() => setFieldVal(customerIdRef)} /><br />

                        <button className="btn btn-primary">Check</button>
                    </div>
                </form>

                {currentState.validations.customerId ? (
                    <div className="text-danger">
                        {currentState.validations.customerId}
                    </div>
                ) : ''}

            </div>

            {response.customer ? (
                <div>
                    <h3 className="text-success">Customer Found:</h3>
                    <DisplayCustomerDetails customer={response.customer} />
                </div>
            ) : ''}


            {response.error ? (
                <div className="text-danger">
                    Error Occurred: {response.erro}
                </div>
            ) : ''}

        </div>
    );
}