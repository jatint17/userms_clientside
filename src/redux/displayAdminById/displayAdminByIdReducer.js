import displayAdminByIdConstants from "./displayAdminByIdConstants";

const initialState = {
    user: undefined,
    error: ''
};

export default function displayAdminByIdReducer(state = initialState, action) {

    if (action.type === displayAdminByIdConstants.success || action.type === displayAdminByIdConstants.fail) {

        let newState = { ...state, ...action };
        return newState;
    }
    return state;
}