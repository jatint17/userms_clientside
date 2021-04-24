import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import updateBalanceReducer from "./updateBalance/updateBalanceReducer";
import displayUserByIdReducer from "./displayUserById/displayUserByIdReducer";
import updatePriceReducer from "./updatePrice/updatePriceReducer";
import productOnRequestReducer from "./productOnRequest/productOnRequestReducer";


// const store = createStore(
//     updateBalanceReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

const store = createStore(
    combineReducers({
        findById:displayUserByIdReducer,
        updateBalance:updateBalanceReducer,
        updatePrice:updatePriceReducer,
        findProduct:productOnRequestReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;