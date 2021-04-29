 /**This component displays the detail of Admin */
export default function DisplayAdminDetails({admin}){ 
    
    let {adminId, username}=admin;
    return(
        <div>
            ID: {adminId}
            <br/>
            username: {username}
            <br/>
        </div>    
    );
}