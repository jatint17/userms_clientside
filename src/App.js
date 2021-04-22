import './App.css';
import Login from './component/Login';
import AddProduct from './component/AddProduct'
import AddAdmin from './component/AddAdmin'
import AddCustomer from './component/AddCustomer'
import FindProductById from './component/DisplayProductOnRequest';
import DisplayProductDetails from './component/DisplayProductDetails';
import DisplayUserDetails from './component/DisplayUserDetails';
import FindCustomerById from './component/DisplayCustomerOnRequest';
import FindUserById from'./component/DisplayUserOnRequest'
import UpdatePrice from './component/UpdatePrice';
import UpdateBalance from './component/UpdateBalance';
import commonStyle2 from './component/css/commonStyle2.module.css'
import { addAdmin, addProduct, addCustomer } from './service/UserService';

function App() {

  
  let data = {productName:"t-shirt", price:1500.0};
  const promise = addProduct(data);
  promise.then(response=>console.log("inside success function:",response.data)).
          catch(error=>console.log("inside error function:",error.response.data));

    return (
        <div className={commonStyle2.appbg}>
            <div className="container" style={{ marginTop: '50px' }}>

                <div className="row">

                    <div className="col-md-9">
                        <AddProduct/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
