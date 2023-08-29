import Button from "../Button/Button"
import "../Button/button.css"
import "./additem.css"

const AddItem = () => 
{
    return (
        <div>
            <input className="additem" type="text" placeholder="Search"></input>
            <Button text="Add Item" />
        </div>
        
    )
}

export default AddItem;