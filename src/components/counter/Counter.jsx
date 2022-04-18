import React from "react";
import "./counter.scss";

export default function Counter() {
  const [counter, setCounter] = useState("0");

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="hamburgerContainer">
      <div className="inside">
        <div className="top">{counter}</div>
        <div className="botton">
          <button className="b1" onClick={handleClick2}>
            -
          </button>
          <button className="b2" onClick={handleClick1}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
