import React, { useState } from "react";

const EditModal = (props) => {
  const { open, setOpen, todo, todos, setTodos } = props;
  const [text, setText] = useState(todo.text);
  const [desc, setDesc] = useState(todo.description);

  const handleEdit = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text,
            description: desc,
          };
        }
        return item;
      })
    );
    setOpen(false);
  };
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ visibility: open ? "visible" : "hidden" }}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity "
          aria-hidden="true"></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
          {/* background-color content */}
          <div className="bg-blue-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2 mb-5">
                  <h3
                    className="text-3xl leading-6 font-medium text-gray-900"
                    id="modal-title">
                    <span className="text-white"> Edit {todo.text}</span>
                  </h3>
                </div>
                <div className="mt-8">
                  <label
                    className="block text-white text-xl font-bold mt-2"
                    htmlFor="username">
                    Title:
                  </label>
                  <input
                    placeholder="Edit Title"
                    value={text}
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    className="w-full text-base border rounded-xl"
                  />
                  <label
                    className="block text-white text-xl font-bold mt-4"
                    htmlFor="username">
                    Description:
                  </label>
                  <textarea
                    cols="20"
                    rows="3"
                    wrap="hard"
                    maxLength="100"
                    placeholder="Edit Description"
                    value={desc}
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full border text-base rounded-xl mt-1"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* background-color footer */}
          <div className="bg-blue-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleEdit}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
              Done
            </button>
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
