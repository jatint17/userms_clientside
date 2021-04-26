import { getProductById } from "../../service/ProductService";
import store from "../store";
import productOnRequestConstants from "./productOnRequestConstants";


export function productByIdSuccess(product) {
    return ({
        product: product,
        error: '',
        type: productOnRequestConstants.success
    });
}

export function productByIdFail(error) {
    return ({
        product : undefined,
        error: error,
        type: productOnRequestConstants.fail
    });
}


export function productByIdAction(data) {
    return () => {
        console.log("Action method called");
        console.log("details from submit handler: ", data);
    
        const promise = getProductById(data.productId);
        promise.then((response) => {
          store.dispatch(productByIdSuccess(response.data));
    
          console.log("inside app.js promise.then");
          console.log("the response getCustomerById is:", response.data);
        })
          .catch((error) => {
            console.log("promise error",error.message);
            store.dispatch(productByIdFail(error.message));
          });
      }
}