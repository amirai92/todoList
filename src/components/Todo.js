import React from "react";

const Todo = (props) => {
  const { text, todo, todos, setTodos, updateTodo } = props;
  const handleDeleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const handleCompleteTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const handleEditTodo = (e) => {
    console.log(e.target.value);
    updateTodo(todo.id, e.target.value);
    setTodos({
      id: null,
      text: "",
    });
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={handleCompleteTodo} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDeleteTodo} className="trash-btn">
        {/* <i className="fas fa-trash-alt"></i> */}
        <i className="fas fa-minus-circle"></i>
        {/* <i className="fas fa-trash"></i> */}
      </button>
      <button onClick={(e) => handleEditTodo(e)} className="complete-btn">
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default Todo;
