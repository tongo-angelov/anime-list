const PageLayout = ({ left, right, showLeft }) => {
  return (
    <div style={{ display: "flex", width: "100%", maxWidth: "1280px" }}>
      {showLeft && <div style={{ flex: "1", background: "#333" }}>{left}</div>}
      <div style={{ flex: "1", padding: "10px", background: "#444" }}>
        {right}
      </div>
    </div>
  );
};

export default PageLayout;
