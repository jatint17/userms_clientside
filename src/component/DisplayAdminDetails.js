export default function DisplayAdminDetails({admin}){
    let {id, username, role}=admin;
    return(
        <div>
            id: {id}
            <br/>
            username: {username}
            <br/>
            role: {role}
        </div>    
    );
}