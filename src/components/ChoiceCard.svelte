<script lang="ts">
    export let name : string;
    export let logoRoute : string;


</script>

<div class="">
    <div class="card bg-white shadow-xl rounded-xl hover:transition-all hover:cursor-pointer hover:scale-105">
        <div>
            <h2 class="card-title text-3xl pt-2 justify-center divide-y">{name}</h2>
        </div>
        <figure class="p-10"><img class="w-24" src={logoRoute} alt="Shoes" /></figure>
    </div>
</div>
