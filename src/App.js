import './App.css';
import Home from './component/Home';
import AddProduct from './component/AddProduct'
import commonStyle2 from "./commonStyle2.module.css";
import AddAdmin from './component/AddAdmin'
import FindProductById from './component/FindProductById';
import AddCustomer from './component/AddCustomer';
import UpdatePrice from './component/UpdatePrice';

function App() {


    return (
        <div className={commonStyle2.appbg}>
            <div className="container" style={{ marginTop: '50px' }}>

                <div className="row">

                    <div className="col-md-9">
                        <AddCustomer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
