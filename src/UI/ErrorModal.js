import React,{useState} from 'react';

import Card from './Card';
import Button from './Button';
import './ErrorModal.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom/cjs/react-dom.development';




const ErrorModal = (props) => {

  let e1=true;
  const [err,seterr]=useState(e1);
  

  //console.log(err);

  
  const func= (e)=>{
    e.preventDefault();
    seterr(false);
  }

  return (
    <div>
    {err &&
    (<form onSubmit={func}>
      <div className='backdrop'  />
      <Card className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions' >
          <Button type="submit">Okay</Button>
        </footer>
      </Card>
    </form>)

    
    
    }

    

</div>
  );
  
  seterr(true);
  
  
};



export default ErrorModal;