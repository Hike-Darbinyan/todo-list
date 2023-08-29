import Button from "../Button/Button";
import "./search.css"


const Search = () => {
    return <div>
        <input className="search" type="text" placeholder="Type text for search..." />
        <Button text="Enter" />
    </div>
}

export default Search;