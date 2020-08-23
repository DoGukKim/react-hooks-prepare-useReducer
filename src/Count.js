import React, { useReducer } from "react";

const PLUS = "plus";
const MIN = "min";
const reducer = (state, action) => {
  switch (action.type) {
    case PLUS:
      return { count: state.count + 1 };
    case MIN:
      return { count: state.count - 1 };
    default:
      throw new Error("noting");
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>The Num is {state.count}</h1>
      <button onClick={() => dispatch({ type: PLUS })}>+ 1</button>
      <button onClick={() => dispatch({ type: MIN })}>- 1</button>
    </>
  );
};

export default Count;
