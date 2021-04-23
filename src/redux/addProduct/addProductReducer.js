import addProductConstants from "./addProductConstants";

const initialState = {
    product:undefined,
    error:''
};
export default function AddProductReducer(state=initialState, action){
    if(action.type === addProductConstants.success|| action.type === addProductConstants.fail){
        return {...state, ...action};
    }
    return state;
}