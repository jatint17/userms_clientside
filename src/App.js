import './App.css';
import Login from './component/Login';
import AddProduct from './component/AddProduct'
import AddAdmin from './component/AddAdmin'
import AddCustomer from './component/AddCustomer'
import FindProductById from './component/FindProductById';
import DisplayProductDetails from './component/DisplayProductDetails';
import DisplayUserDetails from './component/DisplayUserDetails';
import FindCustomerById from './component/FindCustomerById';
import FindUserById from'./component/FindUserById'
import UpdatePrice from './component/UpdatePrice';
import UpdateBalance from './component/UpdateBalance';
import commonStyle2 from './component/css/commonStyle2.module.css'
import { addAdmin, checkCredentials, findByUsername, getUserById } from './service/UserService';
import DisplayUserByUsername from './component/DisplayUserByUsername';

function App() {

    const id=1;
    const promise = getUserById(id);
    promise.then((response) => {
        console.log("inside app.js promise.then");
        console.log("the response getUserById is:", response.data);
    })
    .catch(error => console.log(error.message));
    
    
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
            <div className="container" style={{ marginTop: '50px' }}>

                <div className="row">

                    <div className="col-md-9">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
