import updateBalanceConstants from "./updateBalanceConstants";

const initialState = {customer: undefined, error: ''};

export default function updateBalanceReducer(state=initialState, action) {

    if(action.type === updateBalanceConstants.success || action.type === updateBalanceConstants.fail) {
        let newState = {...state, ...action};//update state with actions
        return newState;
    }

    return state;
}