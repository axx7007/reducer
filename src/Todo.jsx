import React, { useDebugValue } from "react";
import { Container } from "./TodoStyle";
const Todo = ({ value, dispatch }) => {
  return (
    <Container>
      <h1 style={{ color: value.completed ? "red" : "black" }}>
        name : {value.name}
      </h1>
      <button
        onClick={() => dispatch({ type: "toggle", payload: { id: value.id } })}
      >
        Toggle
      </button>
      <button
        onClick={() => dispatch({ type: "delete", payload: { id: value.id } })}
      >
        delete
      </button>
    </Container>
  );
};
export default Todo;
