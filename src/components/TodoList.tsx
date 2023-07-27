import React from "react";

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

const TodoList: React.FC<InputProps> = ({ todos, setTodo }) => {
  const DeleteBtnHandler = (id: string) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodo(updatedTodo);
  };

  const DoneBtnHandler = (id: string, isDone: boolean) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isDone: !isDone } : todo
      )
    );
  };

  const Todo = (item: Todo) => (
    <div className="Todo-Box" key={item.id}>
      <h1 style={{ color: "red" }}>{item.title}</h1>
      <h1 style={{ color: "green" }}>{item.content}</h1>
      <div className="Btn-Container">
        <button className="DeleteBtn" onClick={() => DeleteBtnHandler(item.id)}>
          삭제하기
        </button>
        <button
          className="DoneBtn"
          onClick={() => DoneBtnHandler(item.id, item.isDone)}
        >
          {item.isDone ? "취소하기" : "완료하기"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="TodoList-Container">
      <h2 className="Working" style={{ color: "red" }}>
        Working..🪖
      </h2>
      <div className="Working-Container">
        {todos.filter((item) => !item.isDone).map(Todo)}
      </div>

      <h2 className="Done" style={{ color: "Red" }}>
        Done..🪖
      </h2>
      <div className="Done-Container">
        {todos.filter((item) => item.isDone).map(Todo)}
      </div>
    </div>
  );
};

export default TodoList;
