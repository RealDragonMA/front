<script lang="ts">
    import {snow} from "./components/snow";
    import {onMount} from "svelte";
    import Index from "./route/Index.svelte";
    import type IHero from "./interfaces/IHero";
    import type IResponse from "./interfaces/IResponse";
    import type IStory from "./interfaces/IStory";
    import Story from "./services/Story";
    import Start from "./route/Start.svelte";

    let allStory: IStory[] = [];

    let myStory: string[] = [];
    let myChoice: string = "";

    let hero: IHero | undefined = undefined;
    let currentStory: IStory | undefined = undefined;
    let title: string = "Bienvenue !";
    let desc: string = "En tant que ???, vous allez devoir agir pour faire face au changement climatique.";
    let responses: IResponse[] = [{_id: "1", title: "Suivant"}];
    let background: any = Start;

    function update(): void {
        desc = "En tant que " + hero?.name + ", vous allez devoir agir pour faire face au changement climatique.";
    }

    async function next(): Promise<void> {
        if(!myStory.includes(myChoice)){
            myStory = [...myStory, myChoice];
        }
        currentStory = await (Story.get({storyId: myChoice}));
    }

    function goBack(): void {
        myStory = myStory.slice(0, myStory.length - 1);
        if(myStory.length > 0){
            myChoice = myStory[myStory.length - 1];
        } else {
            myChoice = "";
            myStory = [];
            hero = undefined;
        }
    }

    onMount(async () => {
        allStory = await (Story.getAll());
    })

    window.onload = function(){
        snow.init(100); // 10 flocons seront donc affichés
    };

    $: hero && update();
    $: myChoice && next();
</script>

<Index bind:myHero={hero} bind:myChoice={myChoice} title={currentStory?.title ?? title} description={currentStory?.description ?? desc} responses={currentStory?.responses ?? responses} goBack={goBack}>
    <div slot="page" class="h-full w-full">
        <svelte:component this={(currentStory?.page ?? background)}></svelte:component>
    </div>
</Index>

