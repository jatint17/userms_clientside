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
import DisplayProductOnRequest from './component/DisplayProductOnRequest';
import DisplayCustomerOnRequest from './component/DisplayCustomerOnRequest';
import Profile from './component/Profile';
import lock from './lock.png';
import unlock from './unlock.png';

function App() {

    return (
        <div className={commonStyle2.appbg}>
            <Provider store={store}>
                <Router>
                    <NavBar />
                    <div className="container" style={{ marginTop: '50px' }}>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <Switch>
                                    <Route exact path="/" component={Login} />
                                    <Route exact path="/home" component={Home} />
                                    <Route exact path="/admins/add" component={AddAdmin} />
                                    <Route exact path="/customers/add" component={AddCustomer} />
                                    <Route exact path="/products/add" component={AddProduct} />
                                    <Route exact path="/customers/byid" component={DisplayCustomerOnRequest} />
                                    <Route exact path="/products/byid" component={DisplayProductOnRequest} />
                                    <Route exact path="/profile" component={Profile} />
                                </Switch>
                            </div>
                            <div className="col-md-1 col-sm-1"></div>
                            <div className="col-md-2 col-sm-2">
                                <img src={lock} style={{ height: '270px', paddingTop: '50px' }} />
                            </div>
                            <div className="col-xs-1"></div>

                            <div className="col-md-2 col-sm-2">
                                <img src={unlock} style={{ height: '270px', width: '240px', paddingTop: '50px' }} />

                            </div>

                        </div>
                    </div>
                </Router>
            </Provider>
        </div>
    );
}

export default App;