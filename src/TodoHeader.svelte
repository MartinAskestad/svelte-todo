<script>
  import { createEventDispatcher } from "svelte";
  let title = "";
  const dispatch = createEventDispatcher();
  function handleKeydown(e) {
    if (e.keyCode === 13) {
      const todo = { title, completed: false };
      title = "";
      dispatch("addTodo", { todo });
    }
  }
</script>

<header class="header">
  <h1>todos</h1>
  <input
    class="new-todo"
    placeholder="What needs to be done?"
    bind:value={title}
    on:keydown={handleKeydown} />
</header>
