import React, { useState } from "react";
import validationMessage from "../validationMessage";
import DisplayProductDetails from "./DisplayProductDetails";
import commonStyle1 from "./css/commonStyle1.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updatePriceAction } from "../redux/updatePrice/updatePriceActions";


export default function UpdatePrice() {

    //let mockproduct = { productId: 13, productName: "adidas", price: 2287 };

    let initialState = { productId: undefined, newPrice: undefined, validations: { productId: undefined, newPrice: undefined } };
    let [currentState, setNewState] = useState(initialState);

    let response = useSelector((state) => {
        return ({
            product: state.updatePrice.product,
            error: state.updatePrice.error
        });
    });

    let dispatch = useDispatch();

    let submitHandler = (event) => {
        event.preventDefault();
        if (currentState.validations.productId) {
            return;
        }
        console.log("inside submit handler", response);
        let data = { ...currentState };
        dispatch(updatePriceAction(data));
    }

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
        <div className={commonStyle1.margintop30}>
            <h3>Update Product Price</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>productId: </label>
                        <input type="number" ref={productIdRef} name="productId" onChange={() => setFieldVal(productIdRef)} className="form-control" />
                    </div>

                    {currentState.validations.productId ? (
                        <div>
                            {currentState.validations.productId}
                        </div>
                    ) : ''}

                    <div className="form-group">
                        <label>New Price: </label>
                        <input type="number" ref={newPriceRef} name="newPrice" onChange={() => setFieldVal(newPriceRef)} className="form-control" />
                    </div>

                    <button className="btn btn-primary">Update Price</button>
                </form>



                {response.product ? (
                    <div className={commonStyle1.margintop30}>
                        <h3>Product Details: </h3>
                        <DisplayProductDetails product={response.product} />
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