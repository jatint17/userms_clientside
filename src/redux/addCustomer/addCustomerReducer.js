import addCustomerConstants from "./addCustomerConstants"

const initialState={user:undefined, error: undefined};
export default function addCustomerReducer(state=initialState, action){
    if(action.type === addCustomerConstants.success|| action.type === addCustomerConstants.fail)
    {
    return {...state, ...action};
    }
    return state;
}