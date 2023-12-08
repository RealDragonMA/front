<script lang="ts">
    import axios from "axios";
    import List from "./List.svelte";
    import {onMount} from "svelte";
    import type {IStory} from "../../interfaces/IStory";
    import ModalCreateStory from "./ModalCreateStory.svelte";

    let stories: IStory[] = [];

    onMount(async () => {
        stories = (await axios.get('http://localhost:3000/story/')).data.data;
    });

</script>

<main class="w-full h-full p-4">
    <button onclick="my_modal_1.showModal()" class="btn">Créer histoire</button>
    <List bind:stories="{stories}"/>
</main>

<ModalCreateStory bind:stories="{stories}"/>