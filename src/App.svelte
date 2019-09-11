<script>
  import Other from "./Other.svelte";
  export let name;

  function clicker() {
    console.log("click!");
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<Other on:message={clicker} />
