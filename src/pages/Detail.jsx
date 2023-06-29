import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const params = useParams();

  const todoInfo = todos.find((todo) => todo.id === params.id);

  return (
    <div>
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      >
        <Link to={`/`}>이전페이지</Link>
        <p>{todoInfo.id}</p>
        <p>{todoInfo.title}</p>
        <p>{todoInfo.body}</p>
        <p>{todoInfo.isDone.toString()}</p>
      </div>
    </div>
  );
};

export default Detail;
