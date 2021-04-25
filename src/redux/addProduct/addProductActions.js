import addProductConstants from "./addProductConstants";
import store from "../store";
import { addProduct } from "../../service/ProductService"

export function addProductSuccess(product) {
    return ({
        product: product,
        error: '',
        type: addProductConstants.success
    }
    );
}

export function addProductFail(error) {
    return ({
        product: undefined,
        error: error,
        type: addProductConstants.fail
    }
    );

}

export function addProductAction(data) {
    return () => {
        let requestData = { productName: data.productName, price: data.price };
        console.log(requestData);
        const promise = addProduct(requestData);

        promise.then((response) => {
            store.dispatch(addProductSuccess(response.data));
            console.log("inside success function:", response.data)
        }).
            catch((error) => {
                console.log("inside error function:", error.response.data)
                store.dispatch(addProductFail(error));
            });
    }
}