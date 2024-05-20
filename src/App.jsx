import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const initialState = [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      isDone: false,
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      isDone: true,
    },
  ];
  const [todos, setTodos] = useState(initialState);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <div>
        <main>
          <TodoForm todos={todos} setTodos={setTodos} />
          <div>
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </main>
      </div>
    </>
  );
}
