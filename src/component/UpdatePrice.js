import React, { useState } from "react";
import validationMessage from "../validationMessage";
import DisplayProductDetails from "./DisplayProductDetails";

export default function UpdatePrice() {

    let mockproduct = { productId: 111, productName: "hello", price: 287 };

    let initialState = {
        product: mockproduct, productId: undefined, newPrice: undefined,
        errorMessage: undefined, validations: { productId: undefined, newPrice: undefined }
    };

    let [currentState, setNewState] = useState(initialState);

    let productIdRef = React.createRef();
    let newPriceRef = React.createRef();

    let setFieldVal = (ref) => {
        let field = ref.current;
        let fieldName = field.name;
        let fieldVal = field.value;

        let validationMessage;
        if (ref === productIdRef) {
            validationMessage = validateId(fieldVal);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = {
            ...currentState, [fieldName]: fieldVal, product: undefined,
            errorMessage: undefined, validations: validationState
        };
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
                <form>
                    <div>
                        <label>productId: </label>
                        <input type="number" ref={productIdRef} name="productId" onChange={() => setFieldVal(productIdRef)} /><br />
                    </div>
                    <div>
                        <label>New Price: </label>
                        <input type="number" ref={newPriceRef} name="newPrice" onChange={() => setFieldVal(newPriceRef)} /><br />
                    </div>
                    <button>Update Price</button>
                </form>

                {currentState.validations ? (
                    <div>
                        {currentState.validations.productId}
                    </div>
                ) : ''}

                {currentState.product ? (
                    <div>
                        <DisplayProductDetails product={currentState.product} />
                    </div>
                ) : ''}

                {currentState.errorMessage ? (
                    <div className="text-danger">
                        Error Occurred: {currentState.errorMessage}
                    </div>
                ) : ''}


            </div>
        </div>
    );

}