import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import DisplayProductDetails from './DisplayProductDetails';
import commonStyle1 from "../commonStyle1.module.css";

export default function FindProductById() {

    //let mockproduct = { productId: 111, productName: "hello", price:287};

    let productIdRef = React.createRef();

    let initialState = { productId: undefined, product: undefined, errorMessage: undefined, validations: { productId: undefined } };
    let [currentState, setNewState] = useState(initialState);

    let submitHandler = (event) => {
        event.preventDefault();

        if (currentState.validations.productId) {
            return;
        }
    }

    let setFieldVal = (ref) => {
        let field = ref.current;
        let fieldName = field.name;
        let fieldVal = field.value;

        let validationMessage;
        if (ref === productIdRef) {
            validationMessage = validateId(fieldVal);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = { ...currentState, [fieldName]: fieldVal, product: undefined, errorMessage: undefined, validations: validationState };
        setNewState(newState);
    }

    let validateId = (productId) => {
        if (productId < 0) {
            return validationMessage.idValidation;
        }
        return undefined;
    }


    return (
        <div>
            <h3>Find Product Details By Id</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter productId: </label>
                        <input type="number" ref={productIdRef} className="form-control col-md-4" name="productId" onChange={() => setFieldVal(productIdRef)} /><br />

                        <button className={"btn btn-primary " + commonStyle1.buttoncolor}>Check</button>
                    </div>
                </form>

                {currentState.validations.productId ? (
                    <div className="text-danger">
                        {currentState.validations.productId}
                    </div>
                ) : ''}

            </div>

            {currentState.product ? (
                <div className="text-success">
                    <h2>Product Found:</h2>
                    <DisplayProductDetails product={currentState.product} />
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