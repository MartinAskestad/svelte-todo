<script>
  import { createEventDispatcher } from "svelte";
  export let todoList;
  let editing = "";
  const dispatch = createEventDispatcher();

  function toggleTodo(id) {
    dispatch("toggle", { id });
  }

  function deleteTodo(id) {
    dispatch("delete", { id });
  }

  function toggleEdit(id) {
    if (!editing) {
      editing = id;
    } else {
      editing = "";
    }
  }

  function updateTodo(event, id, title) {
    if (event.keyCode === 13) {
      dispatch("update", { id, title });
      toggleEdit(id);
    }
  }
</script>

<ul class="todo-list">
  <!-- These are here just to show the structure of the list items -->
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  {#each todoList as { id, title, completed }, i (id)}
    <li class:completed class:editing={id === editing}>
      <div class="view">
        <input class="toggle" type="checkbox" on:click={e => toggleTodo(id)} />
        <label on:dblclick={e => toggleEdit(id)}>{title}</label>
        <button class="destroy" on:click={e => deleteTodo(id)} />
      </div>
      <input
        class="edit"
        bind:value={title}
        on:keydown={e => updateTodo(e, id, title)} />
    </li>
  {/each}
</ul>
