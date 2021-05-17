import React, { useState } from "react";
import EditModal from "../Modals/EditModal";
import Tooltip from "../Modals/Tooltip";
import RemoveTask from "../Modals/RemoveTask";

const Todo = (props) => {
  const { todo, todos, setTodos, setInputEstimated, inputEstimated } = props;
  const [editMode, setEditMode] = useState(false);
  const [removeMode, setRemoveMode] = useState(false);

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

  return (
    <div className="w-11/12	 h-full  flex flex-wrap m-2 bg-white text-xl  text-black justify-between items-center duration-1000 p-2 rounded m-auto mb-4 mt-4 border xs:w-6/12 md:w-5/12 ">
      <div className="flex-grow ">
        <input
          type="checkbox"
          onClick={handleCompleteTodo}
          className="h-22 m-3"
          defaultChecked={todo.completed}
        />
        <span
          className={
            todo.completed
              ? "pt-0 pb-0 pl-2 pr-2 line-through opacity-50"
              : "pt-0 pb-0 pl-2 pr-2"
          }>
          {todo.text}
        </span>
      </div>
      <div className="flex flex-wrap 	">
        <Tooltip todo={todo} color={"indigo"} />
        <button
          className="text-white transform  hover:scale-110 border p-1 mr-1 ml-1 rounded-xl sm:text-base "
          onClick={() => setEditMode(!editMode)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="green"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button
          onClick={() => setRemoveMode(!removeMode)}
          className="text-white  text-white transform hover:scale-110 border p-1 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="red">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <RemoveTask
        removeMode={removeMode}
        setRemoveMode={setRemoveMode}
        todo={todo}
        todos={todos}
        setTodos={setTodos}
      />
      <EditModal
        open={editMode}
        setOpen={setEditMode}
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        setInputEstimated={setInputEstimated}
        inputEstimated={inputEstimated}
      />
    </div>
  );
};

export default Todo;
