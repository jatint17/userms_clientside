import './App.css';
import Home from './component/Home';
import AddProduct from './component/AddProduct'
import commonStyle2 from "./commonStyle2.module.css";
import AddAdmin from './component/AddAdmin'
import FindProductById from './component/FindProductById';



function App() {


    return (
        <div className={commonStyle2.appbg}>
            <div className="container" style={{ marginTop: '50px' }}>

                <div className="row">

                    <div className="col-md-9">
                        <FindProductById />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
