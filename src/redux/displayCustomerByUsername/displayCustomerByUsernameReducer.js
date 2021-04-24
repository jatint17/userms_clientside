import displayCustomerByUsernameConstants from "./displayCustomerByUsernameConstants";

const initialState = {
    user: undefined,
    error: ''
};

export default function displayCustomerByUsernameReducer(state = initialState, action) {
    if (action.type === displayCustomerByUsernameConstants.success || action.type === displayCustomerByUsernameConstants.fail) {
        let newState = { ...state, ...action };
        return newState;
    }
    return state;
}