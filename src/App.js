import './App.css';

import commonStyle2 from './component/css/commonStyle2.module.css'
import {  addProduct } from './service/ProductService';
import {  addAdmin } from './service/UserService';
import {  addCustomer } from './service/CustomerService';
import commonStyle2 from './component/css/commonStyle2.module.css'
import { addAdmin, checkCredentials, findByUsername, getUserById } from './service/UserService';
import { updatePrice } from './service/ProductService';
import { updateBalance } from './service/CustomerService';

function App() {

  
  let data = {productName:"t-shirt", price:1500.0};
  const promise = addProduct(data);
  promise.then(response=>console.log("inside success function:",response.data)).
          catch(error=>console.log("inside error function:",error.response.data));


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

//     let data = { customerId: 12, newBalance: 1800 }
//     const promise = updateBalance(data);
//     promise.then((response) => {
//         console.log("inside app.js updateBalance promise.then");
//         console.log("the response is:", response.data);
//     })
//         .catch(error => console.log(error.message));



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
