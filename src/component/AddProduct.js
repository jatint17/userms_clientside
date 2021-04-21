import React, { useState } from "react";
import validationConstants from "../validationConstants";
import DisplayProductDetails from "./DisplayProductDetails";
import commonStyle1 from "./css/commonStyle1.module.css";

export default function AddProduct() {
    const productNameRef = React.createRef();
    const priceRef = React.createRef();

    //let mockProduct = { productId: 111, productName: "Shoes", price: 1000 };
    const initialState = {
        productName: undefined, price: undefined, 
        validations: { productName: undefined }
    };
    const response={product: undefined, errorMsg: undefined};
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

        let newState = { ...currentState, [fieldName]: fieldValue, validations: validationState };
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
        <div className={commonStyle1.margintop30}>
            <form onSubmit={submitHandler}>
                <h3>Enter new product details</h3>

                <div className="form-group">
                    <label><b>Enter product name</b></label>
                    <input name="productName" ref={productNameRef} placeholder="(min 2 characters)" className="form-control"
                        onChange={() => setFieldState(productNameRef)} required />
                </div>

                <div className="form-group">
                    <label><b>Enter price</b></label>
                    <input name="price" type="number" ref={priceRef} placeholder="(non-negative)" className="form-control"
                        onChange={() => setFieldState(priceRef)} required />
                </div>

                <button className={"btn btn-primary " + commonStyle1.buttoncolor}> Create product</button>

                {currentState.validations ? (
                    <div>
                        <div className="text-danger">{currentState.validations.productName}</div>
                        <div className="text-danger">{currentState.validations.price}</div>
                    </div>
                ) : ""}


                {response.product ? (
                    <div className={commonStyle1.margintop30}>
                        <h4>Product added</h4>
                        <DisplayProductDetails product={response.product} />
                    </div>
                ) : ''}

                {response.errorMsg ? (
                    <div className="text-danger">
                        Sorry, your request could not be processed
                        <br />
                        {response.errorMsg}
                    </div>
                ) : ''}

            </form>
        </div>
    );
}