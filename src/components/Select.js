import React from "react";

const Select = (props) => {
  const { handleStatus } = props;
  return (
    <div className="flex m-auto relative w-11/12 h-2/6 bg-gray-100 border rounded shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  md:w-5/12 sm:text-sm w-6/12">
      <select
        onChange={handleStatus}
        name="todos"
        className="flex-auto m-auto w-16 cursor-pointer text-black focus:outline-none sm:text-sm bg-gray-100">
        <option value="all">All Tasks</option>
        <option value="completed">Completed Tasks</option>
        <option value="uncompleted">Uncompleted Tasks</option>
      </select>
    </div>
  );
};

export default Select;
