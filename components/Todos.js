import { completeTodo, deleteTodo } from "../util/crud";

const Todos = ({ allTodos, setAllTodos }) => {
  return (
    <ul className="pt-8">
      {allTodos.map((todo) => (
        <li
          className={"flex mb-4 pb-4 items-center border-b-2 border-gray-300"}
          key={todo._id}
        >
          <p
            className={`w-full ${
              todo.completed ? "line-through text-green-600" : ""
            }`}
          >
            {todo.title}
          </p>
          <button
            className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ${
              todo.completed
                ? "text-green-500 border-green-500 hover:bg-green-500"
                : "text-gray-500 border-gray-500 hover:bg-gray-500"
            }`}
            onClick={() => completeTodo(todo, setAllTodos)}
          >
            Complete
          </button>
          <button
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
            onClick={() => deleteTodo(todo, setAllTodos)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
