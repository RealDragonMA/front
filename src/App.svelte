<script lang="ts">
    import Index from "./route/Index.svelte";
    import Maison from "./route/Maison.svelte";
    import {HEROS} from "./configs/constant";

</script>
<Index heros={HEROS}>
    <div slot="page" class="h-full w-full">
        <Maison/>
    </div>
</Index>
