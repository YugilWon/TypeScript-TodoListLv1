import React, { useState } from "react";
import uuid from "react-uuid";

interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

interface InputProps {
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

const Input: React.FC<InputProps> = ({ todos, setTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const TitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const ContentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const clickAddButtonHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 입력해주세요!");
      return;
    }
    const newTodo: Todo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    setTodo([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className="Input-Container">
        <form className="Input Form">
          <label className="Title-label">제목 </label>
          <input
            className="Title Input"
            type="text"
            value={title}
            onChange={TitleChangeHandler}
          ></input>

          <label className="Content-label"> 내용</label>
          <input
            className="Content Input"
            type="text"
            value={content}
            onChange={ContentChangeHandler}
          ></input>
          <button className="AddBtn" onClick={clickAddButtonHandler}>
            추가하기
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;
