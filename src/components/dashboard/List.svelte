<script lang="ts">
    import type {IStory} from "../../interfaces/IStory";
    import StoryCard from "./StoryCard.svelte";

    export let stories: IStory[] = [];

</script>

<div class="overflow-x-auto w-full">
    <table class="table">
        <!-- head -->
        <thead>
        <tr>
            <th></th>
            <th>Page</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Choix</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {#each stories as story , i}
            <StoryCard bind:stories={stories} {story} {i} />
        {/each}
        </tbody>
    </table>
</div>