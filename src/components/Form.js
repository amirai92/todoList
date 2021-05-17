import React, { useState } from "react";
import AddTask from "../Modals/AddTask";

const Form = (props) => {
  const { todos, setTodos, inputEstimated, setInputEstimated } = props;

  const [modeAddTodo, setModeAddTodo] = useState(false);

  return (
    <>
      <div className="flex ">
        <button
          onClick={() => setModeAddTodo(!modeAddTodo)}
          className="flex fixed right-5 bottom-5 justify-center bg-gray-900 w-12	h-4  m-auto rounded-2xl p-1  transform hover:scale-110 sm:w-16 h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 m-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
      <AddTask
        modeAddTodo={modeAddTodo}
        setModeAddTodo={setModeAddTodo}
        todos={todos}
        setTodos={setTodos}
        inputEstimated={inputEstimated}
        setInputEstimated={setInputEstimated}
      />
    </>
  );
};

export default Form;
