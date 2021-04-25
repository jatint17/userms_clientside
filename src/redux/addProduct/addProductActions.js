import addProductConstants from "./addProductConstants";
import store from "../store";
export function addProductSuccess(product){
return({
    product:product,
    error:'',
    type:addProductConstants.success
}
);
}

export function addProductFail(error){
    return({
        product:undefined,
        error:error,
        type:addProductConstants.fail
    }
    );

}

export function addProductAction(data){
    return()=>{
    const mockProduct={productId:11, productName:"watch", price: 8999.99};
    console.log(data);
    store.dispatch(addProductSuccess(mockProduct));
    //store.dispatch(addProductFail("product add nahi hua lol"));
}
}