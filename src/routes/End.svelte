<script lang="ts">
    import Story from "../services/Story";
    import {onMount} from "svelte";

    export let ways: string[] = [];
    let average: number = 0;

    async function getAverage(){
        let nbRates: number = 0;
        for (const w of ways) {
            let rate: number = (await (Story.get({storyId: w}))).choice;
            if(rate >= 0){
                average +=  rate;
                nbRates++;
            }
        }
        average = Math.round(average / nbRates);
    }

    onMount(async () => {
        await getAverage();
    })
</script>

<div class="w-full absolute top-52 flex flex-row gap-6 justify-center">
    <p class="p-16 rounded-md font-bold {average>5 ? 'bg-green-300' : 'bg-red-200'}">Vous avez une moyenne de bons choix de {average}/10 {average>5 ? "bravo !" : "encore quelques efforts pour le climat à faire..."}</p>
</div>

<div class="h-full w-full hp-hero">
    <figure class="absolute bottom-0 left-3"><img class="w-42" src="hero-illustrations.png" alt="Shoes" /></figure>
</div>

<style>
    .hp-hero {
        background-image: url("../../public/micro-pattern.png"),url("../../public/hero-bkg-trsp.png"),linear-gradient(-20deg,#4dab7f,#047385 100%);
        background-position: 50%;
        background-size: auto,cover,auto;
    }
</style>