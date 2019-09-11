<script>
  import TodoHeader from "./TodoHeader.svelte";
  import TodoList from "./TodoList.svelte";
  import TodoFooter from "./TodoFooter.svelte";
  import AppFooter from "./AppFooter.svelte";
  import { todos } from "./stores";

  $: listOfTodos = convertToArray($todos);

  function convertToArray(todos) {
    const retval = Object.keys(todos).map(key => ({ id: key, ...todos[key] }));
    return retval;
  }

  function addTodo(event) {
    const { todo } = event.detail;
    todos.addTodo(todo);
  }

  function toggleTodo(event) {
    const { id } = event.detail;
    todos.toggleTodo(id);
  }

  function deleteTodo(event) {
    const { id } = event.detail;
    todos.deleteTodo(id);
  }

  function clearCompleted() {
    todos.clearCompleted();
  }

  function updateTodo(event) {
    const { id, title } = event.detail;
    todos.updateTodo(id, title);
  }
</script>

<section class="todoapp">
  <TodoHeader on:addTodo={addTodo} />
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <TodoList
      todoList={listOfTodos}
      on:toggle={toggleTodo}
      on:delete={deleteTodo}
      on:update={updateTodo} />
  </section>
  <!-- This footer should hidden by default and shown when there are todos -->
  {#if (listOfTodos || []).length > 0}
    <TodoFooter todoList={listOfTodos || []} on:clear={clearCompleted} />
  {/if}
</section>
<AppFooter />
