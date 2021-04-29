
export default function DisplayCustomerDetails({customer}){
    //This component display the details of Customer
  
    let {customerId, username}=customer;
    return(
        <div>
            ID: {customerId}
            <br/>
            username: {username}
            <br/>
        </div>    
    );
}