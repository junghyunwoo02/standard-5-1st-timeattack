import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const removeTodo = (id) => {
    const updatedTodo = todos.filter((item) => item.id !== id);
    setTodos(updatedTodo);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };

  const todoList = todos.filter((td) => td.isDone === false);
  const doneList = todos.filter((td) => td.isDone === true);
  return (
    <>
      <div>
        <h2>Working</h2>
        {todoList.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          );
        })}
      </div>
      <div>
        <h2>Done</h2>
        {doneList.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          );
        })}
      </div>
    </>
  );
};
export default TodoList;
