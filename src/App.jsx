import { useState } from "react";

import { searchAnime } from "./AnimeAPI.js";
import FavCard from "./components/FavCard/FavCard.jsx";
import PageLayout from "./components/PageLayout/PageLayout.jsx";
import SearchBar from "./components/SearchResults/SearchBar.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState();

  const [favouriteAnimes, setFavouriteAnimes] = useState([]);

  const handleSearchAnimes = async () => {
    setLoading(true);
    if (searchQuery) {
      const data = await searchAnime(searchQuery, 5);
      setSearchResults(data);
    }
    setLoading(false);
  };

  const isAnimeFav = (id) => {
    return !!favouriteAnimes.find((anime) => anime.mal_id == id);
  };

  const handleAddFav = (id) => {
    if (!isAnimeFav(id))
      setFavouriteAnimes((favouriteAnimes) => [
        searchResults.find((item) => item.mal_id == id),
        ...favouriteAnimes,
      ]);
  };

  const handleRemoveFav = (id) => {
    if (isAnimeFav(id))
      setFavouriteAnimes((favouriteAnimes) =>
        favouriteAnimes.filter((item) => item.mal_id != id)
      );
  };

  return (
    <PageLayout
      showLeft={!!favouriteAnimes.length}
      left={favouriteAnimes.map((item) => (
        <FavCard key={item.mal_id} anime={item} removeFav={handleRemoveFav} />
      ))}
      right={
        <>
          <SearchBar
            setSearchQuery={setSearchQuery}
            handleSearchAnimes={handleSearchAnimes}
          />
          <SearchResults
            results={searchResults}
            isLoading={loading}
            addFav={handleAddFav}
          />
        </>
      }
    />
  );
}

export default App;
