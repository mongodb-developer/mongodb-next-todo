const addTodo = async (newTodoTitle, setNewTodoTitle, setAllTodos) => {
  const result = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify({ newTodoTitle }),
  });
  const data = await result.json();

  setNewTodoTitle("");
  setAllTodos((state) => [...state, data.todo]);
};

const completeTodo = async ({ _id, completed }, setAllTodos) => {
  const result = await fetch("/api/todos/" + _id, {
    method: "PUT",
    body: JSON.stringify({ _id, completed: !completed }),
  });
  const data = await result.json();

  setAllTodos((state) =>
    state.map((todo) => (todo._id === data.todo._id ? data.todo : todo))
  );
};

const deleteTodo = async (todoToDelete, setAllTodos) => {
  const result = await fetch("/api/todos/" + todoToDelete._id, {
    method: "DELETE",
  });
  const data = await result.json();

  if (data.deleted === 1) {
    setAllTodos((state) =>
      state.filter((todo) => todo._id !== todoToDelete._id)
    );
  }
};

export { addTodo, completeTodo, deleteTodo };
