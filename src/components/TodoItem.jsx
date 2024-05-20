const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  return (
    <>
      <div key={todo.id}>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
        <button onClick={() => removeTodo(todo.id)}>삭제하기</button>

        <button onClick={() => completeTodo(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </>
  );
};

export default TodoItem;
