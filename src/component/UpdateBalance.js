import React, { useState } from "react";
import validationMessage from "../validationMessage";

export default function UpdateBalance() {

    let initialState = {
        customer: undefined, customerId: undefined, newBalance: undefined,
        errorMessage: undefined, validations: { customerId: undefined, newBalance: undefined }
    };

    let [currentState, setNewState] = useState(initialState);

    let customerIdRef = React.createRef();
    let newBalanceRef = React.createRef();

    let setFieldVal = (ref) => {
        let field = ref.current;
        let fieldName = field.name;
        let fieldVal = field.value;

        let validationMessage;
        if (ref === customerIdRef) {
            validationMessage = validateId(fieldVal);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = {
            ...currentState, [fieldName]: fieldVal, customer: undefined,
            errorMessage: undefined, validations: validationState
        };
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
                <form>
                    <div>
                        <label>CustomerId: </label>
                        <input type="number" ref={customerIdRef} name="customerId" onChange={() => setFieldVal(customerIdRef)} /><br />
                    </div>
                    <div>
                        <label>New Balance: </label>
                        <input type="number" ref={newBalanceRef} name="newBalance" onChange={() => setFieldVal(newBalanceRef)} /><br />
                    </div>
                    <button>Update Balance</button>
                </form>

                {currentState.validations ? (
                    <div>
                        {currentState.validations.customerId}
                    </div>
                ) : ''}

                {currentState.errorMessage ? (
                    <div style={{ color: 'red' }}>
                        Error Occurred: {currentState.errorMessage}
                    </div>
                ) : ''}


            </div>
        </div>
    );

}