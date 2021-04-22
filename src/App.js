import './App.css';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import AddAdmin from './component/AddAdmin';
import AddCustomer from './component/AddCustomer';
import commonStyle2 from './component/css/commonStyle2.module.css';
import { addAdmin, checkCredentials, findByUsername, getUserById } from './service/UserService';
import DisplayUserByUsername from './component/DisplayUserByUsername';
import { updatePrice } from './service/ProductService';
import { updateBalance } from './service/CustomerService';
import DisplayProductOnRequest from './component/DisplayProductOnRequest';
import DisplayCustomerOnRequest from './component/DisplayCustomerOnRequest';
import DisplayUserOnRequest from './component/DisplayUserOnRequest';

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

    // let data = { productId: 5, newPrice: 1800 }
    // const promise = updatePrice(data);
    // promise.then((response) => {
    //     console.log("inside app.js updatePrice promise.then");
    //     console.log("the response is:", response.data);
    // })
    //     .catch(error => console.log(error.message));

    // let data = { customerId: 12, newBalance: 1800 }
    // const promise = updateBalance(data);
    // promise.then((response) => {
    //     console.log("inside app.js updateBalance promise.then");
    //     console.log("the response is:", response.data);
    // })
    //     .catch(error => console.log(error.message));


    // let data = { username: "username69", password:"pass69haha" };
    // const promise = addAdmin(data);
    // promise.then((response) => {
    //     console.log("inside app.js updateBalance promise.then");
    //     console.log("the response is:", response.data);
    // })
    //     .catch(error => console.log(error.message));


    return (
        <div className={commonStyle2.appbg}>
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-md-9">
                        <DisplayUserOnRequest />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
