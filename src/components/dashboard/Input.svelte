<script lang="ts">
  import ErrorLine from "./ErrorLine.svelte";

  export let type: "text" | "email" | "password" | "number" | "datetime-local" | "color" | "range" | "url" | "search" | "tel" | "checkbox" | "radio" | "file" | "hidden" | "button" | "submit" | "reset" | "image" | "date" | "month" | "time" | "datetime" | "week" | undefined = undefined;
  export let placeholder: string;
  export let title: string;
  export let name: string;
  export let errors: any;

  let isError: any = undefined;

  function setError() {
    isError = eval("$errors?." + name.replace(".", "?."));
  }

  $: $errors && setError();


</script>

<div class="form-field w-full">
  <label class="block form-label" for="seller-idNumber">{title}</label>
  <input type="{type}" class="input input-sm input-bordered max-w-full" name="{name}" placeholder="{placeholder}">
  <ErrorLine error="{isError}" hidden="{!isError}" />
</div>
