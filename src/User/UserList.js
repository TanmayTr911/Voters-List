import react  from "react";
import './UserList.css';
import Card from "../UI/Card";
import sign from './sign.jpg';
import userimg from './user.jpg';

const UserList =(props)=>{
    
    return(
        <Card className="users">
            <ul className="list">
                {props.users.map(user=>( 

                <li className="listitem" key={user.id}>
                    <div className="build">

                        <img src={userimg} className="userimg"/>
                        <p className="para">
                        Voter's Name: &nbsp; {user.name} 
                        <br/> <br/>
                        Voter's Age: &nbsp; {user.age} years
                        </p>
                        <img src={sign} className="img"/>
                    </div>
                </li> 
                ))}
            </ul>
        </Card>
    )
}

export default UserList;