<script>
  import { createEventDispatcher } from "svelte";
  export let todoList;

  const dispatch = createEventDispatcher();

  function clearCompleted() {
    dispatch("clear");
  }
</script>

<footer class="footer">
  <!-- This should be `0 items left` by default -->
  <span class="todo-count">
    <strong>{todoList.filter(todo => !todo.completed).length}</strong>
    item left
  </span>
  <!-- <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul> -->
  <!-- Hidden if no completed items are left ↓ -->
  {#if (todoList.filter(todo => todo.completed) || []).length > 0}
    <button class="clear-completed" on:click={clearCompleted}>
      Clear completed
    </button>
  {/if}
</footer>
