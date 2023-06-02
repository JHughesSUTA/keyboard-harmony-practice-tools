import "../styles/button.css";

const Button = ({ buttonValue, onToggle, id, active }) => {
  return <button className={`button ${active ? "active" : ""}`} id={id} onClick={() => onToggle(id)}>{buttonValue}</button>;
};

export default Button;
