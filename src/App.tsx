import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import TopBar from "./components/TopBar";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodo] = useState([
    {
      id: uuid(),
      title: "타입스크립트 공부하기",
      content: "열심히 공부하기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "기상하기",
      content: "정시에 기상하기",
      isDone: true,
    },
  ]);

  return (
    <>
      <TopBar />
      <Input todos={todos} setTodo={setTodo} />
      <TodoList todos={todos} setTodo={setTodo} />
    </>
  );
}

export default App;
