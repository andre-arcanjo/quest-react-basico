import React from "react";
import './button.css';

const Button = ({label = 'Baixar CV'}) => {
    
    const infoLabel = () => {
        alert('A label desse botão é: '  + label)
    }
    
    return(
        <button className="button" onClick={infoLabel}>{label}</button>
    )
};



export default Button;