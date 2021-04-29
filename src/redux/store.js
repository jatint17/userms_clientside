import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addAdminReducer from "./addAdmin/addAdminReducer";
import addCustomerReducer from "./addCustomer/addCustomerReducer";
import addProductReducer from "./addProduct/addProductReducer";
import productOnRequestReducer from "./productOnRequest/productOnRequestReducer";
import displayAdminByIdReducer from "./displayAdminById/displayAdminByIdReducer";
import loginReducer from "./login/loginReducer";
import displayCustomerByIdReducer from "./displayCustomerById/displayCustomerByIdReducer";

const store = createStore(
  combineReducers({
    addCustomer: addCustomerReducer,
    addAdmin:addAdminReducer,
    addProduct:addProductReducer,
    productById: productOnRequestReducer,
    adminById: displayAdminByIdReducer,
    customerById: displayCustomerByIdReducer,
    login: loginReducer

  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
