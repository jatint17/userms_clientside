export default function DisplayUserDetails({user}){
    let {userId, username}=user;
    return(
        <div>
            ID: {userId}
            <br/>
            username: {username}
            <br/>
        </div>    
    );
}