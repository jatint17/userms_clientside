 /**
  * This component displays the details of Admin
 */
export default function DisplayAdminDetails({admin}){ 
    
    let {adminId, username}=admin;
    return(
        <div>
            <ul className="list-group col-md-6">
            <li className="list-group-item">
            ID: {adminId}
            </li>
            <li className="list-group-item">
            username: {username}
            </li>
            <br/>
            </ul>
        </div>    
    );
}