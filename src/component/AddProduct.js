import React, { useState } from "react";
import validationConstants from "../validationConstants";
import DisplayProductDetails from "./DisplayProductDetails";
import commonStyle1 from "../commonStyle1.module.css";

export default function AddCustomer() {
    const productNameRef = React.createRef();
    const priceRef = React.createRef();

    let mockProduct = { productId: 111, productName: "Shoes", price: 1000 };
    const initialState = {
        productName: undefined, price: undefined, errorMsg: undefined, product: mockProduct,
        validations: { productName: undefined }
    };
    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const setFieldState = (reference) => {
        const fieldName = reference.current.name;
        const fieldValue = reference.current.value;
        setNewState({ ...currentState, [fieldName]: fieldValue });


        let validationMessage;
        if (reference === productNameRef) {
            validationMessage = validateName(fieldValue);
        }

        if (reference === priceRef) {
            validationMessage = validatePrice(fieldValue);
        }

        let validationState = { ...currentState.validations, [fieldName]: validationMessage };

        let newState = { ...currentState, [fieldName]: fieldValue, customer: undefined, errorMessage: undefined, validations: validationState };
        setNewState(newState);
    }

    let validateName = (productName) => {
        if (productName.length < 2) {
            return validationConstants.productNameShorterThanTwo;
        }
        return undefined;
    }

    let validatePrice = (price) => {
        if (price < 0) {
            return validationConstants.price;
        }
        return undefined;
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h3>Enter new product details</h3>

                <div className="form-group">
                    <label><b>Enter productName</b></label>
                    <input name="productName" ref={productNameRef} placeHolder="(min 2 characters)" className="form-control"
                        onChange={() => setFieldState(productNameRef)} required />
                </div>

                <div className="form-group">
                    <label><b>Enter price</b></label>
                    <input name="price" type="number" ref={priceRef} className="form-control"
                        onChange={() => setFieldState(priceRef)} required />
                </div>

                <button className={"btn btn-primary " + commonStyle1.buttoncolor}> Create product</button>

                {currentState.validations ? (
                    <div>
                        <div className="text-danger">{currentState.validations.productName}</div>
                        <div className="text-danger">{currentState.validations.price}</div>
                    </div>
                ) : ""}


                {currentState.product ? (
                    <div>
                        <DisplayProductDetails product={currentState.product} />
                    </div>
                ) : ''}

                {currentState.errorMsg ? (
                    <div className="text-danger">
                        Sorry, your request could not be processed
                        <br />
                        {currentState.errorMsg}
                    </div>
                ) : ''}

            </form>
        </div>
    );
}