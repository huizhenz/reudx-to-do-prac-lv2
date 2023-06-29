import React from "react";
import TodoList from "../components/TodoList";
import Form from "../components/Form";

const Main = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <Form />
      <TodoList listIsDone={false} />
      <TodoList listIsDone={true} />
    </div>
  );
};

export default Main;
