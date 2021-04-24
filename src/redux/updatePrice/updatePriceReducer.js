import updatePriceConstants from "./updatePriceConstants";

const initialState = {product: undefined, error: ''};

export default function updatePriceReducer(state=initialState, action) {

    if(action.type === updatePriceConstants.success || action.type === updatePriceConstants.fail) {
        let newState = {...state, ...action};//update state with actions
        return newState;
    }

    return state;
}