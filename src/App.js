import React,{useState} from 'react';
import AddUser from './User/AddUser';
import UserList from './User/UserList';
import './App.css';

function App() {

  const [userlist,setUserList]=useState([]);

  const enterUser=(userName,userAge)=>{
        
    setUserList((prevUserList)=>{
      return(
        [...prevUserList,{name:userName,age:userAge,id:Math.random().toString()}]
      ); 
    })
  }

  return (
    <div>
      <AddUser addUser={enterUser}></AddUser>
      <h2 className='head'>Eligible Voter's List</h2>
      <UserList users={userlist}></UserList>
    </div>
  );
}

export default App;