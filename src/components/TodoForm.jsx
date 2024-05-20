import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <label>제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>내용</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default TodoForm;
