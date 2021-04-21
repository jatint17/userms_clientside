import './App.css';
import Home from './component/Home';
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

function App() {


    return (
        <div className={commonStyle2.appbg}>
            <div className="container" style={{ marginTop: '50px' }}>

                <div className="row">

                    <div className="col-md-9">

                        <UpdatePrice/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
