import "../styles/button.css";

const Button = ({ buttonValue, onToggle, chordId }) => {
  return <button onClick={() => onToggle(chordId)}>{buttonValue}</button>;
};

export default Button;
