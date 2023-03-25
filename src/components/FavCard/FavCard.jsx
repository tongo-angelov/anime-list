import { useEffect, useState } from "react";

import { fetchCharacters } from "../../AnimeAPI";
import Loader from "../Loader/Loader";
import CharacterItem from "./CharacterItem";

const FavCard = ({ anime, removeFav }) => {
  const {
    mal_id,
    title,
    score,
    synopsis,
    images: {
      jpg: { image_url: image },
    },
  } = anime;

  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    setLoading(true);
    setCharacters(await fetchCharacters(mal_id));
    setLoading(false);
  };

  useEffect(() => {
    if (!characters.length) getCharacters();
  }, [showMore]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "180px",
          background: "#444",
          padding: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          boxShadow: "1px 1px 5px #222",
          borderRadius: "8px",
        }}
      >
        <div style={{ borderRadius: "8px", overflow: "hidden", flex: "1" }}>
          <img src={image} style={{ height: "180px" }} />
        </div>

        <div style={{ textAlign: "center", flex: "3" }}>
          <h5>{title}</h5>
          {/* <h5>Score: {score}</h5> */}
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              maxWidth: "100%",
              overflow: "hidden",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            {synopsis}
          </p>
        </div>

        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button style={{ flex: "1" }} onClick={() => removeFav(mal_id)}>
            Remove
          </button>
          <button
            style={{ flex: "1", marginTop: "10px" }}
            onClick={handleShowMore}
          >
            Details
          </button>
        </div>
      </div>
      {showMore && (
        <div
          style={{
            background: "#222",
            marginLeft: "20px",
            marginRight: "20px",
            boxShadow: "1px 1px 3px #111",
            borderRadius: "0 0 8px 8px",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {loading ? (
            <Loader />
          ) : (
            characters.map((item) => (
              <CharacterItem
                key={item.character.mal_id}
                character={item.character}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FavCard;
