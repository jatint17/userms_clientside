import loginConstants from "./loginConstants";

const initialState = {
    successMsg: undefined,
    error: ''
};

export default function loginReducer(state = initialState, action) {
    if (action.type === loginConstants.success || action.type === loginConstants.fail) {
        return { ...state, ...action };
    }
    return state;
}