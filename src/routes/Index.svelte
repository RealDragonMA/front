<script lang="ts">
    import DescriptionCard from "../components/DescriptionCard.svelte";
    import ChoiceCard from "../components/ChoiceCard.svelte";
    import HeroCard from "../components/HeroCard.svelte";
    import type IResponse from "../interfaces/IResponse";
    import type IHero from "../interfaces/IHero";
    import {HEROS} from "../configs/constant";

    export let heros: IHero[] = HEROS;

    export let responses: IResponse[] = [];
    export let title: string = "";
    export let description: string = "";

    export let myHero: IHero | undefined = undefined;
    export let myChoice: string;

    export let goBack: () => Promise<void>;
</script>

<div class="h-screen w-screen">
    <slot name="page" class="h-full w-full"/>
</div>

{#if myHero === undefined}
    <div class="w-full absolute top-20 bottom-20 flex flex-row gap-6 justify-center items-center p-8">
        {#each heros as hero}
            <div class="w-1/5" on:click={() => myHero = hero}>
                <HeroCard name={hero.name} desc={hero.desc} logoRoute={hero.logoRoute}/>
            </div>
        {/each}
    </div>
{:else}
    {#if title !== ""}
        <div class="w-1/3 h-36 absolute top-5 left-5 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="hover:cursor-pointer mr-3" on:click={goBack}><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M7 12l5 5v-3h4v-4h-4V7l-5 5Z"/></svg>
            <DescriptionCard title={title} description={description}/>
        </div>
    {/if}

    <div class="w-full absolute bottom-10 flex flex-row gap-6 justify-center p-8">
        {#each responses as response}
            <div class="h-36" on:click={() => myChoice = response._id}>
                <ChoiceCard name={response.title} logoRoute={response.icon}/>
            </div>
        {/each}
    </div>
{/if}