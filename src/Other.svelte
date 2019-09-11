<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("message", { text: "Bleh" });
  }
</script>

<button on:click={handleClick}>Click me!</button>
