import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeBody = (event) => setBody(event.target.value);

  const onSubmitTodo = (event) => {
    event.preventDefault();

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: shortid,
        title,
        body,
        isDone: false,
      },
    });
  };

  return (
    <form onSubmit={onSubmitTodo}>
      제목 : <input type="text" value={title} onChange={onChangeTitle}></input>
      내용 : <input type="text" value={body} onChange={onChangeBody}></input>
      <button type="submit">추가</button>
    </form>
  );
};

export default Form;
