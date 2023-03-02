import "../styles/button.css";

const Button = ({ buttonValue, onToggle }) => {
  return <button onClick={onToggle}>{buttonValue}</button>;
};

export default Button;
