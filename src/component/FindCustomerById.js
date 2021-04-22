import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import commonStyle1 from "./css/commonStyle1.module.css";
import DisplayUserDetails from './DisplayUserDetails';

export default function FindCustomerById() {

    let mockCustomer = { customerId: 111, errorMessage: undefined };

    let customerIdRef = React.createRef();

    let initialState = { customerId: undefined, validations: { customerId: undefined } };
    let [currentState, setNewState] = useState(initialState);
    const response={customer: undefined, errorMessage: undefined};

    let response = { customer: mockCustomer, errorMessage: undefined };

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

    const convert = (customer) => {
        let user = {userId: customer.customerId};
        return user;
    }


    return (
        <div>
            <h3>Find Customer Details By Id</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label >customerId: </label>
                        <input type="number" ref={customerIdRef} className="form-control col-md-4" name="customerId" onChange={() => setFieldVal(customerIdRef)} /><br />

                        <button className="btn btn-primary">Check</button>
                    </div>
                </form>

                {response.validations.customerId ? (
                    <div className="text-danger">
                        {currentState.validations.customerId}
                    </div>
                ) : ''}

            </div>

            {response.customer ? (
                <div className="text-success">
                    <h3>Customer Found:</h3>
                    <DisplayUserDetails user={convert(response.customer)} />
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