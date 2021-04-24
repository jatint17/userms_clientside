import productOnRequestConstants from "./productOnRequestConstants";

const initialState = {
    product: undefined,
    error: ''
};

export default function productOnRequestReducer(state = initialState, action) {

    if(action.type === productOnRequestConstants.success || action.type === productOnRequestConstants.fail) {

        let newState = {...state, ...action};
        return newState;
    }
    return state;
}