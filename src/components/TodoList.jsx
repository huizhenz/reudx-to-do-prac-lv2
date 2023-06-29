import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodoList = ({ listIsDone }) => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const onClickDeleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const onClickSwitchTodo = (id) => {
    dispatch({
      type: "SWITCH_TODO",
      payload: id,
    });
  };

  return (
    <main
      style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
    >
      <h2>{!listIsDone ? "ToDo List" : "Done List"}</h2>
      <div>
        {todos
          .filter((filteredTodo) => filteredTodo.isDone === listIsDone)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <Link to={`/${todo.id}`}> 상세페이지 </Link>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <p>{todo.isDone.toString()}</p>
                <button onClick={() => onClickDeleteTodo(todo.id)}>삭제</button>
                <button onClick={() => onClickSwitchTodo(todo.id)}>
                  {!listIsDone ? "완료" : "취소"}
                </button>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default TodoList;
