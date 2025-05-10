import './index.css';

const Button = ({label = 'Baixar CV'}) => {  
    return(
        <button className="button" onClick={() => alert(`A label desse botão é: ${label}`)}>{label}</button>
    )
};

export default Button;