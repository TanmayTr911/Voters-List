import react from 'react';
import './Button.css';


const Button=(props)=>{

    let classes='button '+props.className;

    return(
        
        <button className={classes} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
        
    )
}

export default Button;