import React, { useState } from "react";
import validationMessage from "../validationMessage";
import commonStyle1 from "./css/commonStyle1.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateBalanceAction } from "../redux/updateBalance/updateBalanceActions";


export default function UpdateBalance() {

    //let mockCustomer = {customerId:20, newBalance: 1720.0};

    let initialState = {
        customerId: undefined, newBalance: undefined,
        validations: { customerId: undefined, newBalance: undefined }};

    const response = useSelector((state) => {
        return ({
            customer: state.updateBalance.customer, 
            error: state.updateBalance.error
        });
    });

    const dispatch = useDispatch();//action function is here

    let [currentState, setNewState] = useState(initialState);

    let customerIdRef = React.createRef();
    let newBalanceRef = React.createRef();

    let submitHandler = (event) => {
        event.preventDefault();
        if (currentState.validations.customerId) {
            return;
        }
        console.log("inside submit handler");

        let data = {...currentState};
        dispatch(updateBalanceAction(data));
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

        let newState = { ...currentState, [fieldName]: fieldVal, validations: validationState};
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
        <div className={commonStyle1.margintop30}>
            <h3>Update Customer Balance</h3>
            <div>
                <form onSubmit = {submitHandler}>
                    <div className="form-group">
                        <label>CustomerId: </label>
                        <input type="number" ref={customerIdRef} name="customerId" onChange={() => setFieldVal(customerIdRef)} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>New Balance: </label>
                        <input type="number" ref={newBalanceRef} name="newBalance" onChange={() => setFieldVal(newBalanceRef)} className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Update Balance</button>
                </form>

                {currentState.validations ? (
                    <div className="text-danger">
                        {currentState.validations.customerId}
                    </div>
                ) : ''}

                {response.customer ? (
                    <div className={commonStyle1.margintop30}>
                        <h2>Customer Details: </h2>
                        Customer ID: {response.customer.userId}<br />
                        Balance: Rs {response.customer.balance}
                    </div>
                ) : ''}

                {response.error ? (
                    <div className="text-danger">
                        Error Occurred: {response.error}
                    </div>
                ) : ''}


            </div>
        </div>
    );

}