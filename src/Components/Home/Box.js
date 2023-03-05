const Box = ({ color, text, setactive }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="box"
      onClick={() => setactive(true)}
    >
      {text}
    </button>
  );
};

export default Box;
