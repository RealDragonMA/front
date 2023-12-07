<script lang="ts">

    export let title: string;
    export let description: string;


</script>

<div class="w-full h-full p-14  ">
    <div class="card flex p-4 shadow-xl bg-white backdrop-blur-md opacity-60">
        <div class="card-body">
            <h2 class="card-title text-3xl text-black ">{title}</h2>
            <p class="text-xl w-1/8 text-black">{description}</p>
        </div>
    </div>
</div>
