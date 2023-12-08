<script lang="ts">

    let click: number = 0;

    function charlie(){
        click++;
        if(click < 10) return
        //Spin and grow up the image with id "charlie"
        let charlie = document.getElementById("charlie");
        charlie.classList.add("animate-spin");
        setInterval(() => {
            charlie.classList.add("w-[150%]");
            charlie.classList.add("h-[200%]");
        }, 10);
    }

</script>

<div class="h-full w-full hp-hero">
    <figure class="absolute bottom-0 left-3"><img class="w-42" src="hero-illustrations.png" alt="Shoes" /></figure>
    <img on:click={charlie} id="charlie" class="z-50 absolute w-12 h-14 bottom-[272px] left-[86px]"  alt="charlie" src="charlie.png"/>
</div>

<style>
    .hp-hero {
        background-image: url("../../public/micro-pattern.png"),url("../../public/hero-bkg-trsp.png"),linear-gradient(-20deg,#4dab7f,#047385 100%);
        background-position: 50%;
        background-size: auto,cover,auto;
    }
</style>