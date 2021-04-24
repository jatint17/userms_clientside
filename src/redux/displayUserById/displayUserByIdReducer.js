import displayUserByIdConstants from "./displayUserByIdConstants";

const initialState = {
    user: undefined,
    error: ''
};

export default function displayUserByIdReducer(state = initialState, action) {

    if(action.type === displayUserByIdConstants.success || action.type === displayUserByIdConstants.fail) {

        let newState = {...state, ...action};
        return newState;
    }
    return state;
}