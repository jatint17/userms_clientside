export default function DisplayAdminDetails({admin}){
     // This component display the details of Admin
    
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