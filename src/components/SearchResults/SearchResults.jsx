import Loader from "../Loader/Loader";
import SearchItem from "./SearchItem";

const SearchResults = ({ results, isLoading, addFav }) => {
  if (isLoading) return <Loader />;

  if (!results) return;

  if (!results.length)
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h5>No results found</h5>
      </div>
    );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {results.map((item, index) => (
        <SearchItem key={index} anime={item} addFav={addFav} />
      ))}
    </div>
  );
};

export default SearchResults;
