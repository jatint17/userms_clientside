import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import DisplayProductDetails from './DisplayProductDetails';

export default function FindProductById() {

    //let mockproduct = { productId: 111, productName: "hello", price:287};

    let productIdRef = React.createRef();

    let initialState = { productId: undefined, product: undefined, errorMessage: "errr", validations: { productId: undefined } };
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
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Enter productId: </label>
                        <input type="number" ref={productIdRef} name="productId" onChange={() => setFieldVal(productIdRef)} /><br />
                    </div>
                    <button>Check</button>
                </form>
                
                {currentState.validations.productId ? (
                <div>
                    {currentState.validations.productId}
                </div>
            ) : ''}

            </div>

            {currentState.product ? (
                <div>
                    <h2>Product Found:</h2>
                    <DisplayProductDetails product={currentState.product}/>
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