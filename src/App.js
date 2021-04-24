import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import commonStyle2 from './component/css/commonStyle2.module.css'
import { Provider } from 'react-redux';
import store from "./redux/store"
import AddProduct from './component/AddProduct';
import AddCustomer from './component/AddCustomer';
import AddAdmin from './component/AddAdmin';
import Login from './component/Login';
import NavBar from './component/NavBar';
import Home from './component/Home';
import DisplayAdminOnRequest from './component/DisplayAdminOnRequest';
import DisplayProductOnRequest from './component/DisplayProductOnRequest';
import DisplayCustomerOnRequest from './component/DisplayCustomerOnRequest';
import Logout from './component/Logout';
import Profile from './component/Profile';

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
            <Provider store={store}>
                <Router>
                    <NavBar />
                    <div className="container" style={{ marginTop: '50px' }}>
                        <div className="row">
                            <div className="col-md-9">
                                <Switch>
                                    <Route exact path="/" component={Login} />
                                    <Route exact path="/home" component={Home} />
                                    <Route exact path="/admins/add" component={AddAdmin} />
                                    <Route exact path="/customers/add" component={AddCustomer} />
                                    <Route exact path="/products/add" component={AddProduct} />
                                    <Route exact path="/admins/byid" component={DisplayAdminOnRequest} />
                                    <Route exact path="/customers/byid" component={DisplayCustomerOnRequest} />
                                    <Route exact path="/products/byid" component={DisplayProductOnRequest} />
                                    <Route exact path="/profile" component={Profile} />
                                    <Route exact path="/logout" component={Logout} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
