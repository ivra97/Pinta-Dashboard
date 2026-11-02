import React from 'react' ;
import './Button.css';

const Button = ({text, callback, buttonClass}) => {         /* las llaves son para destructurar el objeto que se recibe */
    return (
        <>
            <button className = {buttonClass + " buttonDesing"} onClick={callback}>    
                {text}
            </button>
            
        </>

    )
}

export default Button

