/** 
 * This component displays the details of Customer 
 */
export default function DisplayCustomerDetails({ customer }) {

    let { customerId, username } = customer;
    return (
        <div>
            <ul className="list-group col-md-6">
                <li className="list-group-item">
                    ID: {customerId}
                </li>
                <li className="list-group-item">
                    username: {username}
                </li>
            </ul>
        </div>
    );
}