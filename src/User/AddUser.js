import react,{useState} from 'react'
import './AddUser.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

const AddUser=(props)=>{

    const [username,setUserName]=useState('');
    const [userage,setUserAge]=useState('');
    const [error, setError] = useState();

    const changeName=(e)=>{
        setUserName(e.target.value);
    }

    const changeAge=(e)=>{
        setUserAge(e.target.value);
    }

    const onAddUser=(e)=>{

        e.preventDefault();

        


        if(username.trim().length===0 && +userage<0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
              });
            return;
        }
        else if(username.trim().length===0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name'
              });
              return;
        }
        else if(+userage<18 && +userage>0){ 
            let agediff=18-userage;
            setError({
                title: 'Invalid input',
                message: 'User too Young to vote . Please come after '+agediff+ ' years'
              });
              return;
        }

        else{

            props.addUser(username,userage);

            setUserAge('');
            setUserName('');

        }

        function errorRem() {
            setError(null);
        }

        
    }

    return(
        <div>

{error && 
        <ErrorModal
          title={error.title}
          message={error.message}
          onok={errorRem}
        />
      }
        
        
        <Card className='input' >
           
        <form onSubmit={onAddUser}>
            
            <label htmlFor='Username' className='label'>User Name</label>
            <input type="text" id="Username" className='inp' onChange={changeName} value={username}/>

            <label htmlFor='Userage' className='label'>User Age</label>
            <input type="number" id="Userage" className='inp' onChange={changeAge} value={userage}/>
           
           <Button type='submit' className='btn'>Add User</Button>
            
        </form>

        </Card>
        </div>
    );
            


}

export default AddUser;