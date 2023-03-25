const SearchBar = ({ setSearchQuery, handleSearchAnimes }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        style={{ flex: "1", marginRight: "10px", paddingLeft: "10px" }}
        placeholder="Type anime name"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearchAnimes}> Search</button>
    </div>
  );
};

export default SearchBar;
