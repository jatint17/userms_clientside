import React, { useState } from 'react';
import validationMessage from '../validationMessage';
import DisplayProductDetails from './DisplayProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { productByIdAction } from '../redux/productOnRequest/productOnRequestActions';

/** 
 * user enters the product id in the form to view the details of the product corresponding to the product id 
 */ 

export default function DisplayProductOnRequest() {

    let productIdRef = React.createRef();

    let initialState = { productId: undefined, validations: { productId: undefined } };
    let [currentState, setNewState] = useState(initialState);

    const response = useSelector((state) => {
        let respObj= ({ 
            product: state.productById.product, 
            error: state.productById.error 
        });
       // setNewState({...currentState});
        return respObj;
        
    });

    let dispatch = useDispatch();

    let submitHandler = (event) => {
        event.preventDefault();

        if (currentState.validations.productId) {
            return;
        }
        console.log("inside submit handler", response);

        let data = {...currentState};
        dispatch(productByIdAction(data));
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

        let newState = { ...currentState, [fieldName]: fieldVal, validations: validationState };
        setNewState(newState);
    }

    let validateId = (productId) => {
        if (productId < 0) {
            return validationMessage.idValidation;
        }
        return undefined;
    }


    return (
        <div style={{ paddingBottom: '50px' }}>
            <h2>Find Product Details By Id</h2>
            <h6>Any logged in user can view a product</h6><br />
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter productId: </label>
                        <input type="number" ref={productIdRef} className="form-control col-md-8" name="productId" onChange={() => setFieldVal(productIdRef)} /><br />

                        <button className={"btn btn-primary"}>Check</button>
                    </div>
                </form>

                {currentState.validations.productId ? (
                    <div className="text-danger">
                        {currentState.validations.productId}
                    </div>
                ) : ''}

            </div>

            {response.product ? (
                <div>
                    <h2 className="text-success">Product Found:</h2>
                    <DisplayProductDetails product={response.product} />

                </div>
            ) : ''}


            {response.error ? (
                <div className="text-danger">
                    Error Occurred: {response.error.message}
                </div>
            ) : ''}

        </div>
    );
}