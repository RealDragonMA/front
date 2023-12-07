<script lang="ts">
    import {onMount} from "svelte";
    import Index from "./route/Index.svelte";
    import Maison from "./route/Maison.svelte";
    import type IHero from "./interfaces/IHero";
    import type IResponse from "./interfaces/IResponse";
    import type IStory from "./interfaces/IStory";
    import Story from "./services/Story";

    let allStory: IStory[] = [];

    let myStory: string[] = [];
    let myChoice: string = "";

    let hero: IHero | undefined = undefined;
    let title: string = "Bienvenue !";
    let desc: string = "En tant que ???, vous allez devoir agir pour faire face au changement climatique.";
    let responses: IResponse[] = [{_id: "1", title: "Suivant"}];

    function update(): void {
        desc = "En tant que " + hero?.name + ", vous allez devoir agir pour faire face au changement climatique.";
    }

    function next(): void {
        myStory = [...myStory, myChoice];
    }

    onMount(async () => {
        allStory = await (Story.getAll());
    })

    $: hero && update();
    $: myChoice && next();
</script>

<Index bind:myHero={hero} bind:myChoice={myChoice} title={title} description={desc} responses={responses}>
    <div slot="page" class="h-full w-full">
        <Maison/>
    </div>
</Index>
