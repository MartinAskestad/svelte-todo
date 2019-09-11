import { writable } from "svelte/store";

function simpleId() {
  return "aaaab".replace(/[ab]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === "a" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function createTodosStore() {
  const { subscribe, update } = writable({});

  const addTodo = todo =>
    update(todos => ({ ...todos, [simpleId()]: { ...todo } }));

  const toggleTodo = id =>
    update(todos => ({
      ...todos,
      [id]: { ...todos[id], completed: !todos[id].completed }
    }));

  const deleteTodo = id =>
    update(todos => {
      const newTodos = { ...todos };
      delete newTodos[id];
      return newTodos;
    });

  const clearCompleted = () =>
    update(todos => {
      const newTodos = Object.keys(todos)
        .map(key => ({ ...todos[key], id: key }))
        .filter(todo => !todo.completed)
        .reduce(
          (acc, v) =>
            Object.assign(acc, {
              [v.id]: { title: v.title, completed: v.completed }
            }),
          {}
        );
      console.log(todos, newTodos);
      return newTodos;
    });

  const updateTodo = (id, title) =>
    update(todos => {
      const newTodos = { ...todos };
      newTodos[id].title = title;
      return newTodos;
    });

  return {
    subscribe,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    updateTodo
  };
}

export const todos = createTodosStore();
