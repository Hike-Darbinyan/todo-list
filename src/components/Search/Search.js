import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <input
        className="search"
        type="text"
        placeholder="Type text for search..."
      />
      <button className="btn">All</button>
      <button className="btn">Done</button>
      <button className="btn-last">Important</button>
    </div>
  );
};

export default Search;
