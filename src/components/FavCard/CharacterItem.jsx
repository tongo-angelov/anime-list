const CharacterItem = ({ character }) => {
  const {
    name,
    images: {
      jpg: { image_url: image },
    },
  } = character;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100px",
        textAlign: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={image} />
      <p>{name}</p>
    </div>
  );
};

export default CharacterItem;
