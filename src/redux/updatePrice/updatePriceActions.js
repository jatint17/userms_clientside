import store from "../store";
import updatePriceConstants from "./updatePriceConstants";
import { updatePrice } from '../../service/ProductService';

export function updatePriceSuccess(product) {

    return ({
        product: product,
        error: '',
        type: updatePriceConstants.success
    });
}

export function updatePriceFail(error) {
    return ({
        product: undefined,
        error: error,
        type: updatePriceConstants.fail
    })
}

export function updatePriceAction(data) {

    return () => {
        // const promise = updatePrice(data.newPrice);
        // promise.then((response) => {
        // const product = response.data;
        let mockproduct = { productId: 13, productName: "adidas", price: 2280 };
        console.log("Action method called");
        console.log("mockproduct: ", mockproduct);
        console.log("details from submit handler: ",data);
        store.dispatch(updatePriceSuccess(mockproduct));//dispatching action object
        // })
        //     .catch((error) => {
        //         console.log(error.message);
        //         const errorMsg = error.message;
        //         store.dispatch(updatePriceFail(errorMsg));
        //     });
    }
}