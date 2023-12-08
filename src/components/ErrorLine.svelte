<script lang="ts">
  import { fade } from "svelte/transition";

  export let error: string = "";
  export let hidden: boolean = false;
</script>

<div class="form-label">
  {#if !hidden}
    <span class="form-label-alt text-error" in:fade out:fade>{error}</span>
  {/if}
</div>

