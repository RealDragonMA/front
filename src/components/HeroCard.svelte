<script lang="ts">
    export let name : string = "";
    export let desc : string = "";
    export let logoRoute : string = "";
</script>
 
<div class="">
    <div class="p-4 w-full h-full card bg-white shadow-xl rounded-xl divide-y-2 hover:transition-all hover:cursor-pointer hover:scale-105">
        <figure class="p-10"><img class="w-42" src={logoRoute} alt="Shoes" /></figure>
        <div>
            <h2 class="card-title text-3xl pt-2 justify-center divide-y">{name}</h2>
            <div class="card-body">
                <p class="text-xl">{desc}</p>
            </div>
        </div>
    </div>
</div>
