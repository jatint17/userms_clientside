import displayCustomerByIdConstants from "./displayCustomerByIdConstants";

const initialState={
    customer:undefined,
    error:''
};

export default function displayCustomerByIdReducer(state=initialState,action)
{
    if(action.type===displayCustomerByIdConstants.success || action.type===displayCustomerByIdConstants.fail){
        let newState={...state,...action};
        return newState;
    }
    return state;
}