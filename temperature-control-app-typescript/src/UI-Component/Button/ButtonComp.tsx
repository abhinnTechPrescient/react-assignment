import React from "react";
import "./ButtonComp.css";

interface propsObj {
  value: string;
  counter: () => void;
  disable: boolean;
  backgroundColor: string;
}

const ButtonComp: React.FC<propsObj> = ({
  value,
  counter,
  disable,
  backgroundColor,
}) => {
  return (
    <button
      className="button"
      type="button"
      onClick={counter}
      disabled={disable}
      style={{ background: backgroundColor }}
    >
      {value}
    </button>
  );
};

export default ButtonComp;
