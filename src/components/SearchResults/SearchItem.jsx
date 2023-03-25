const SearchItem = ({ anime, addFav }) => {
  const { mal_id, title } = anime;

  return (
    <button style={{ marginTop: "10px" }} onClick={() => addFav(mal_id)}>
      {title}
    </button>
  );
};

export default SearchItem;
