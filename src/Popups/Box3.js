const Box = ({ color, text, setactive }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="box3"
      onClick={() => setactive(true)}
    >
      {text}
    </button>
  );
};

export default Box;
