import "../styles/button.css";

const Button = ({ buttonValue, onToggle, id }) => {
  return <button onClick={() => onToggle(id)}>{buttonValue}</button>;
};

export default Button;
