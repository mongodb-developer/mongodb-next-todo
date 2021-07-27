import { useState } from "react";
import { addTodo } from "../util/crud";

const NewTodoForm = ({ setAllTodos }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        type="text"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button
        className="flex-no-shrink p-2 border-2 rounded text-green-500 border-green-500 hover:text-white hover:bg-green-500"
        onClick={() => addTodo(newTodoTitle, setNewTodoTitle, setAllTodos)}
      >
        Add
      </button>
    </div>
  );
};

export default NewTodoForm;
