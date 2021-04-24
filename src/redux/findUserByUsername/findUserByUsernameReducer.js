import findUserByUsernameConstants from "./findUserByUsernameConstants";

const initialState={
    user:undefined,
    error:''
};

export default function findUserByUsernameReducer(state=initialState,action)
{
    if(action.type===findUserByUsernameConstants.success || action.type===findUserByUsernameConstants.fail){
        let newState={...state,...action};
        return newState;
    }
    return state;
}