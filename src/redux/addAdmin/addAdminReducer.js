import addAdminConstants from "./addAdminConstants";

const initialState = {
    user:undefined,
    error:''
};
export default function AddAdminReducer(state=initialState, action){
    if(action.type === addAdminConstants.success|| action.type === addAdminConstants.fail){
        return {...state, ...action};
    }
    return state;
}