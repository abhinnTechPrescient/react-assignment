import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      type="button"
      onClick={props.counter}
      disabled={props.disable}
      style={{ background: props.backgroundColor }}
    >
      {props.value}
    </button>
  );
};

export default Button;
