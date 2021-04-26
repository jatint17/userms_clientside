import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import commonStyle2 from './component/css/commonStyle2.module.css'
import { Provider } from 'react-redux';
import store from "./redux/store"
import NavBar from './component/NavBar'
import AddProduct from './component/AddProduct';
import AddCustomer from './component/AddCustomer';
import AddAdmin from './component/AddAdmin';
import Login from './component/Login';
import Home from './component/Home';
import DisplayAdminOnRequest from './component/DisplayAdminOnRequest';
import DisplayProductOnRequest from './component/DisplayProductOnRequest';
import DisplayCustomerOnRequest from './component/DisplayCustomerOnRequest';
import Logout from './component/Logout';
import Profile from './component/Profile';
import { Navbar } from 'react-bootstrap';

function App() {

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


    return (
        <div className={commonStyle2.appbg}>
            <Provider store={store}>
                <Router>
                    <NavBar />
                    <div className="container" style={{ marginTop:'50px' }}>
                        <div className="row">
                            <div className="col-md-12">
                                <Switch>
                                    <Route exact path="/" component={Login} />
                                    <Route exact path="/home" component={Home} />
                                    <Route exact path="/admins/add" component={AddAdmin} />
                                    <Route exact path="/customers/add" component={AddCustomer} />
                                    <Route exact path="/products/add" component={AddProduct} />
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
