import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import commonStyle1 from "../commonStyle1.module.css";

export default function FindCustomerById() {

    //let mockCustomer = { customerId: 111, errorMessage: undefined };

    let customerIdRef = React.createRef();

    let initialState = { customerId: undefined, customer: undefined, errorMessage: undefined, validations: { customerId: undefined } };
    let [currentState, setNewState] = useState(initialState);

    let submitHandler = (event) => {
        event.preventDefault();

        if (currentState.validations.customerId) {
            return;
        }
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

        let newState = { ...currentState, [fieldName]: fieldVal, customer: undefined, errorMessage: undefined, validations: validationState };
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
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group" className="col-lg-5 col-centered">
                        <label >customerId: </label>
                        <input type="number" ref={customerIdRef} className="form-control" name="customerId" onChange={() => setFieldVal(customerIdRef)} /><br />
                    
                    <button className={"btn btn-primary " + commonStyle1.buttoncolor } >Check</button>
                    </div>
                </form>
                
                {currentState.validations.customerId ? (
                <div className="text-danger">
                    {currentState.validations.customerId}
                </div>
            ) : ''}

            </div>

            {currentState.customer ? (
                <div className="text-success">
                    <h2>Customer Found:</h2>
                    {currentState.customer.customername}
                </div>
            ) : ''}


            {currentState.errorMessage ? (
                <div className="text-danger">
                    Error Occurred: {currentState.errorMessage}
                </div>
            ) : ''}

        </div>
    );
}