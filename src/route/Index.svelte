<script lang="ts">
    import type IResponse from "../interfaces/IResponse";
    import DescriptionCard from "../components/DescriptionCard.svelte";
    import ResponseCard from "../components/ResponseCard.svelte";

    export let responses: number[] = [1, 2, 3, 4];
    export let title: string = "bonsoir";
    export let description: string = "glinglin";

    let cols: string = "grid-cols-" + (responses.length ?? 1);
</script>

<div class="w-1/3 h-1/5 absolute top-5 left-5">
    <DescriptionCard title={title} description={description}/>
</div>


<div class="h-screen w-screen">
    <slot name="page" class="h-full w-full"/>
</div>


<div class="w-full absolute bottom-10 grid {cols} gap-6 p-8">
    {#each responses as response}
        <div class="h-36">
            <ResponseCard/>
        </div>
    {/each}
</div>