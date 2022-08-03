import "./Button.css";

const Button = (props) => {
  console.log(props);
  return (
    <button
      className="button"
      type="button"
      onClick={props.counter}
      disabled={props.disable}
    >
      {props.value}
    </button>
  );
};

export default Button;
