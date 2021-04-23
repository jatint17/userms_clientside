import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addAdminReducer from "./addAdmin/addAdminReducer";
import addCustomerReducer from "./addCustomer/addCustomerReducer";
import addProductReducer from "./addProduct/addProductReducer";
const store = createStore(
  combineReducers({
    addCustomer: addCustomerReducer,
    addAdmin:addAdminReducer,
    addProduct:addProductReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
