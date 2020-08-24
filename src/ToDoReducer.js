import React, { useReducer, useState } from "react";
import uuid from "uuid";

const InintalState = {
  toDos: [],
};
const ADDTODO = "add";
const DELTODO = "del";
const reducer = (state, action) => {
  switch (action.type) {
    case ADDTODO:
      return { toDos: [...state.toDos, { text: action.payload }] };
    case DELTODO:
      return {};
    default:
      throw new Error();
  }
};

const ToDoReducer = () => {
  const [state, dispatch] = useReducer(reducer, InintalState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADDTODO, payload: newToDo });
  };
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Add To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write to do"
          onChange={onChange}
          value={newToDo}
        />
      </form>
      <h3>To Dos List</h3>
      <ul>
        {state.toDos.map((ToDo, index) => (
          <li key={index}>{ToDo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoReducer;
