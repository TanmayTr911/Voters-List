import react,{useState} from 'react'
import './AddUser.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

const AddUser=(props)=>{

    const [username,setUserName]=useState('');
    const [userage,setUserAge]=useState('');

    const changeName=(e)=>{
        setUserName(e.target.value);
    }

    const changeAge=(e)=>{
        setUserAge(e.target.value);
    }

    const onAddUser=(e)=>{

        e.preventDefault();


        if(username.trim().length===0 && +userage<0){
            alert("enter correct age and name");
            setUserAge('');
            setUserName('');
        }
        else if(username.trim().length===0){
            alert("enter correct name");
            setUserAge('');
            setUserName('');
        }
        else if(+userage<18 && +userage>0){ 
            let agediff=18-userage;
            alert("User Too Young to Vote.Come after "+agediff+" years");
            setUserAge('');
            setUserName('');
        }

        else{

            props.addUser(username,userage);

            setUserAge('');
            setUserName('');

        }

        
    }

    return(
        <Card className='input' >
        <form onSubmit={onAddUser}>
            
            <label htmlFor='Username' className='label'>User Name</label>
            <input type="text" id="Username" className='inp' onChange={changeName} value={username}/>

            <label htmlFor='Userage' className='label'>User Age</label>
            <input type="number" id="Userage" className='inp' onChange={changeAge} value={userage}/>
           
           <Button type='submit' className='btn'>Add User</Button>
            
        </form>

        </Card>
    );
            


}

export default AddUser;