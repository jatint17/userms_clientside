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
        user: undefined,
        error: error,
        type: productOnRequestConstants.fail
    });
}

export function productByIdAction(data) {
    return () => {
        const mockProduct = { productId: 127, productName: "Nike", price: 2210.0 };
        console.log("Action method called");
        console.log("mock product: ", mockProduct);
        console.log("details from submit handler: ",data);
        store.dispatch(productByIdSuccess(mockProduct));
    }
}