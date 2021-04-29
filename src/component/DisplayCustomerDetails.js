/** 
 * This component displays the details of Customer 
 */
export default function DisplayCustomerDetails({customer}){
   
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