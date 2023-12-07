<script lang="ts">
    import DescriptionCard from "../components/DescriptionCard.svelte";
    import ChoiceCard from "../components/ChoiceCard.svelte";
    import HeroCard from "../components/HeroCard.svelte";
    import type IResponse from "../interfaces/IResponse";
    import type IHero from "../interfaces/IHero";

    export let heros: IHero[] = [];
    export let responses: IResponse[] = [];
    export let title: string = "";
    export let description: string = "";
</script>

<div class="h-screen w-screen">
    <slot name="page" class="h-full w-full"/>
</div>

{#if title !== ""}
    <div class="w-1/3 h-36 absolute top-5 left-5">
        <DescriptionCard title={title} description={description}/>
    </div>
{/if}

<div class="w-full absolute bottom-10 flex flex-row gap-6 justify-center p-8">
    {#each responses as response}
        <div class="h-36">
            <ChoiceCard name={title} logoRoute="../public/farmer.png"/>
        </div>
    {/each}
</div>

<div class="w-full absolute top-20 bottom-20 flex flex-row gap-6 justify-center items-center p-8">
    {#each heros as hero}
        <div class="w-1/5">
            <HeroCard name={hero.name} desc={hero.desc} logoRoute={hero.logoRoute}/>
        </div>
    {/each}
</div>