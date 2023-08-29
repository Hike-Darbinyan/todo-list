import "./button.css"

const Button = ({text, color}) => 
{
    return (<button className="enterbutton" style={{color}}>{text}</button>)
}

export default Button;