<script lang="ts">
    import Index from "./route/Index.svelte";
    import Maison from "./route/Maison.svelte";
</script>
<Index>
    <div slot="page" class="h-full w-full">
        <Maison/>
    </div>
</Index>
