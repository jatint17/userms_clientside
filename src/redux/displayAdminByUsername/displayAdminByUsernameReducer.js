import displayAdminByUsernameConstants from "./displayAdminByUsernameConstants";

const initialState = {
    user: undefined,
    error: ''
};

export default function displayAdminByUsernameReducer(state = initialState, action) {
    if (action.type === displayAdminByUsernameConstants.success || action.type === displayAdminByUsernameConstants.fail) {
        let newState = { ...state, ...action };
        return newState;
    }
    return state;
}