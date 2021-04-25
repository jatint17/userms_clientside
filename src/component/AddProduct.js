import React, { useState } from "react";
import validationConstants from "../validationConstants";
import DisplayProductDetails from "./DisplayProductDetails";
import commonStyle1 from "./css/commonStyle1.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "../redux/addProduct/addProductActions";

export default function AddProduct() {
  const productNameRef = React.createRef();
  const priceRef = React.createRef();

  const initialState = {
    productName: undefined,
    price: undefined,
    validations: { productName: undefined, price: undefined },
  };

  const response = useSelector(state => {
    return (
      { product: state.addProduct.product, errorMsg: state.addProduct.error.message });
  });

  const [currentState, setNewState] = useState(initialState);

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.productName || currentState.validations.price) {
      return;
    }
    let data = { ...currentState };
    dispatch(addProductAction(data));
  };

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

    let validationState = {
      ...currentState.validations,
      [fieldName]: validationMessage,
    };

    let newState = {
      ...currentState,
      [fieldName]: fieldValue,
      validations: validationState,
    };
    setNewState(newState);
  };

  let validateName = (productName) => {
    if (productName.length < 2) {
      return validationConstants.productNameShorterThanTwo;
    }
    return undefined;
  };

  let validatePrice = (price) => {
    if (price < 0) {
      return validationConstants.price;
    }
    return undefined;
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>Enter new product details</h3>

        <div className="form-group">
          <label>
            <b>Enter product name</b>
          </label>
          <input
            name="productName"
            ref={productNameRef}
            placeholder="(min 2 characters)"
            className="form-control"
            onChange={() => setFieldState(productNameRef)}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <b>Enter price</b>
          </label>
          <input
            name="price"
            type="number"
            ref={priceRef}
            placeholder="(non-negative)"
            className="form-control"
            onChange={() => setFieldState(priceRef)}
            required
          />
        </div>

        <button className={"btn btn-primary"}>
          Create product
        </button>

        {currentState.validations ? (
          <div>
            <div className="text-danger">
              {currentState.validations.productName}
            </div>
            <div className="text-danger">{currentState.validations.price}</div>
          </div>
        ) : (
          ""
        )}

        {response.product ? (
          <div>
            <h4 className="text-success">Product added</h4>
            <DisplayProductDetails product={response.product} />
          </div>
        ) : (
          ""
        )}

        {response.errorMsg ? (
          <div className="text-danger">
            Sorry, your request could not be processed
            <br />
            {response.errorMsg}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
