import addAdminConstants from "./addAdminConstants";
import store from "../store";
export function addAdminSuccess(user){
return({
    user:user,
    error:'',
    type:addAdminConstants.success
}
);
}

export function addAdminFail(error){
    return({
        user:undefined,
        error:error,
        type:addAdminConstants.fail
    }
    );

}

export function addAdminAction(data){
    return()=>{
    //const mockUser={userId:7, username:"user_7"};
    //store.dispatch(addAdminSuccess(mockUser));
    store.dispatch(addAdminFail("admin add nahi hua babu bhaiyaaa"));
}
}
