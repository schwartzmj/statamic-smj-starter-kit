<script lang="ts">
  $: count = 0;
</script>

<div class="theme-container mx-auto py-20">
  <h1>This is the Svelte app.</h1>
  <button class="btn mt-4" on:click={() => count++}>Count is {count}</button>
</div>

<style></style>
