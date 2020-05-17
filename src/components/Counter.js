import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";
import "../mediaQueries.css";

const button1 = { width: "4.5rem", height: "2.5rem", cursor: "pointer" };

const button2 = {
  borderRadius: "50%",
  marginLeft: "2rem",
  marginRight: "2rem",
  border: "1px solid blue",
  width: "5rem",
  height: "5rem",
  textAlign: "center",
  verticalAlign: "middle",
  pointerEvents: "none",
};

const button3 = { width: "4.5rem", height: "2.5rem", cursor: "pointer" };

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const decrementButton = () => {
    dispatch(decrement());
  };

  const incrementButton = () => {
    dispatch(increment());
  };

  return (
    <div className="divCounterStyle">
      <button style={button1} onClick={decrementButton}>
        -
      </button>
      <button style={button2}>{counter}</button>
      <button style={button3} onClick={incrementButton}>
        +
      </button>
    </div>
  );
};

export default Counter;
