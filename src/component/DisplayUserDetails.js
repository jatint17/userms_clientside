export default function DisplayUserDetails({user}){
    let {id, username, role}=user;
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