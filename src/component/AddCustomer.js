import React,{useState} from "react";
import DisplayUserDetails from "./DisplayUserDetails";
export default function AddCustomer(){
    const usernameRef = React.createRef();
    const passwordRef = React.createRef();
    let mockCustomer = {id: 1, username:"appu", password:"123456", role: "Customer"};
    const initialState = {username: undefined, password: undefined, errorMsg:undefined, customer: undefined};
    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event)=>{
        event.preventDefault();
    }

    const setFieldState = (reference)=>{
       const fieldName = reference.current.name;
       const fieldValue = reference.current.value;
        setNewState({...currentState, [fieldName] : fieldValue});
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h3>Enter new customer details</h3>

                <div className="form-group">
                    <label><b>Enter username</b></label>
                    <input name = "username" ref = {usernameRef} placeHolder="(min 5 characters)" className = "form-control" onChange={()=>setFieldState(usernameRef)} required/>
                </div>

                <div className="form-group">
                    <label><b>Enter password</b></label>
                    <input name = "password" type = "password" ref = {passwordRef} placeHolder="(min 8 characters)" className = "form-control"onChange={()=>setFieldState(passwordRef)}required/>
                </div>

                <button className="btn btn-primary"> Create customer</button>

                {currentState.customer?(
                    <div>
                        <DisplayUserDetails user = {currentState.customer}/>
                    </div>
                ):''
                }

                {currentState.errorMsg?(
                    <div className="text-danger">
                        Sorry, your request could not be processed
                        <br/>
                        {currentState.errorMsg}
                    </div>
                ):''
                }

            </form>
        </div>
    );
}