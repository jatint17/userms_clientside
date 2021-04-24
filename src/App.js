import './App.css';
import commonStyle2 from './component/css/commonStyle2.module.css'
import { addProduct } from './service/ProductService';
import { addCustomer } from './service/CustomerService';
import { login, addAdmin, checkCredentials, findByUsername, getUserById } from './service/UserService';
import { updatePrice } from './service/ProductService';
import { updateBalance } from './service/CustomerService';
import DisplayUserByUsername from './component/DisplayUserByUsername';
import DisplayProductOnRequest from './component/DisplayProductOnRequest';
import DisplayCustomerOnRequest from './component/DisplayCustomerOnRequest';
import DisplayUserOnRequest from './component/DisplayUserOnRequest';
import AddAdmin from './component/AddAdmin';
import AddCustomer from './component/AddCustomer';
import AddProduct from './component/AddProduct';
import Login from './component/Login';
import UpdateBalance from './component/UpdateBalance';
import UpdatePrice from './component/UpdatePrice';
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {

    // let data = { productName: "t-shirt", price: 1500.0 };
    // const promise = addProduct(data);
    // promise.then(response => console.log("inside success function:", response.data)).
    //     catch(error => console.log("inside error function:", error.response.data));

    // const id=1;
    // const promise = getUserById(id);
    // promise.then((response) => {
    //     console.log("inside app.js promise.then");
    //     console.log("the response getUserById is:", response.data);
    // })
    // .catch(error => console.log(error.message));

    // const promise = checkCredentials("admin","admin");
    // promise.then((response) => {
    //     console.log("inside app.js promise.then");
    //     console.log("the response checkCredentials is:", response.data);
    // })
    // .catch(error => console.log(error.message));

    // const promise = findByUsername("admin");
    // promise.then((response) => {
    //     console.log("inside app.js findByUsername promise.then");
    //     console.log("the response is:", response.data);
    // })
    // .catch(error => console.log(error.message));

    // let data = { productId: 7, newPrice: 1800 }
    // const promise = updatePrice(data);
    // promise.then((response) => {
    //     console.log("inside app.js updatePrice promise.then");
    //     console.log("the response is:", response.data);
    // })
    //     .catch(error => console.log(error.message));

    // let data = { customerId: 3, newBalance: 1800 }
    // const promise = updateBalance(data);
    // promise.then((response) => {
    //     console.log("inside app.js updateBalance promise.then");
    //     console.log("the response is:", response.data);
    // })
    //     .catch(error => console.log(error.message));


    // let data = { username: "username11", password:"password" };
    // const promise = addAdmin(data);
    // promise.then((response) => {
    //     console.log("inside app.js updateBalance promise.then");
    //     console.log("the response is:", response.data);
    // })
    //     .catch(error => console.log(error.message));



    return (
        <div className={commonStyle2.appbg}>
            <Provider store={store} >
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-md-9">
                        <DisplayProductOnRequest />
                    </div>
                </div>
            </div>
            </Provider>
        </div>
    );
}

export default App;
