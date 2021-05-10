import React, { useDebugValue } from "react";
import { Container } from "./TodoStyle";
const Todo = ({ value }) => {
  return (
    <Container>
      <h1>name : {value.name}</h1>
    </Container>
  );
};
export default Todo;
