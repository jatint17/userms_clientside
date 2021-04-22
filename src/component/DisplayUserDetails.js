export default function DisplayUserDetails({user}){
    let {userId, username, role}=user;
    return(
        <div>
            ID: {userId}
            <br/>
            username: {username}
            <br/>
        </div>    
    );
}