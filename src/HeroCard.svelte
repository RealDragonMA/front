<script lang="ts">
    let name : string = "Politicien";
    let desc : string = "Mentez pour gagner";
    import logo from './assets/politician.png';

</script>

<div class="w-1/5">
    <div class="p-4 w-full h-full card bg-white shadow-xl rounded-xl divide-y-2 hover:transition-all hover:cursor-pointer hover:scale-105">
        <figure class="p-10"><img class="w-42" src={logo} alt="Shoes" /></figure>
        <div>
            <h2 class="card-title text-3xl pt-2 justify-center divide-y">{name}</h2>
            <div class="card-body">
                <p class="text-xl">{desc}</p>
            </div>
        </div>
    </div>
</div>
