<script lang="ts">

    import {snow} from "./components/snow";
    import {onMount} from "svelte";
    import Index from "./routes/Index.svelte";
    import type IHero from "./interfaces/IHero";
    import Story from "./services/Story";
    import Start from "./routes/Start.svelte";
    import type IStory from "./interfaces/IStory";
    import End from "./routes/End.svelte";
    import {boolean} from "yup";
    import {navigate} from "svelte-routing";

    let isEnd: boolean = false;

    let allStory: IStory[] = [];

    let myStory: string[] = [];
    let myChoice: string = "";

    let hero: IHero | undefined = undefined;
    let currentStory: IStory | undefined = undefined;
    let background: any = Start;

    async function updateBackground(page: string){
        await import('/backgrounds/' + page + '.svelte').then(data => {
            background = data.default;
        }).catch(() => {
            background = Start;
        });
    }

    function update(): void {
        myChoice = hero?.starter ?? "";
    }

    async function next(): Promise<void> {
        if(!myStory.includes(myChoice)){
            myStory = [...myStory, myChoice];
        }
        if(myChoice !== ""){
            currentStory = await (Story.get({storyId: myChoice}));
            if(currentStory.page === "Fin"){
                isEnd = true;
            } else {
                if(currentStory.responses.length === 0){
                    navigate("/ohbahnoncestpasfait", {replace: true});
                } else {
                    await updateBackground(currentStory.page);
                }

            }
        }
    }

    async function goBack(): Promise<void> {
        myStory = myStory.slice(0, myStory.length - 1);
        if(myStory.length > 0){
            myChoice = myStory[myStory.length - 1];
            currentStory = await (Story.get({storyId: myChoice}));
            await updateBackground(currentStory.page);
        } else {
            myChoice = "";
            myStory = [];
            hero = undefined;
            background = Start;
        }
        isEnd = false;
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

<Index bind:myHero={hero} bind:myChoice={myChoice} title={currentStory?.title ?? ""} description={currentStory?.description ?? ""} responses={currentStory?.responses ?? []} goBack={goBack}>
    <div slot="page" class="h-full w-full">
        {#if isEnd}
            <End ways={myStory}/>
        {:else}
            <svelte:component this={background}></svelte:component>
        {/if}
    </div>
</Index>