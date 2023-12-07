<script lang="ts">
    import DescriptionCard from "./DescriptionCard.svelte";

    let title: string = "Titre";
    let description: string = "Description";


</script>

<div class="relative h-screen w-screen flex flex-row text-7xl">
    <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes">
    </div>
    <div class="absolute top-0 left-0 p-4">
        <DescriptionCard title={title} description={description} ></DescriptionCard>
    </div>
</div>
