import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import displayCustomerByIdReducer from "./displayCustomerById/displayCustomerByIdReducer";

import findUserByUsernameReducer from "./findUserByUsername/findUserByUsernameReducer";



const store = createStore(
    combineReducers({
        findById:displayCustomerByIdReducer,
       findByName: findUserByUsernameReducer,
       
       
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;