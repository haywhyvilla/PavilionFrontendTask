const Box = ({ color, text, setFilterPopupactive }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="box"
      onClick={() => setFilterPopupactive(true)}
    >
      {text}
    </button>
  );
};

export default Box;
