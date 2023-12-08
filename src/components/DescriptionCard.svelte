<script lang="ts">

    export let title: string = "";
    export let description: string = "";


</script>

<div class="w-full h-full">
    <div class="card flex shadow-xl bg-white backdrop-blur-md opacity-60 rounded-md">
        <div class="card-body">
            <h2 class="card-title text-3xl text-black">{title}</h2>
            <hr class="my-2 border-t-2 border-gray-300">
            <p class="text-xl w-1/8 text-black">{description}</p>
        </div>
    </div>
</div>
