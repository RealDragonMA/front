<script lang="ts">
    export let name : string;
    export let logoRoute : string | undefined;

</script>

<div class="">
    <div class="card p-8 bg-white shadow-xl rounded-xl hover:transition-all hover:cursor-pointer hover:scale-105">
        <div>
            <h2 class="card-title text-3xl justify-center divide-y">{name}</h2>
        </div>
        {#if logoRoute}
            <figure class="mt-5"><img class="w-16" src={logoRoute} alt="Shoes" /></figure>
        {/if}
    </div>
</div>
