<script>
    import HeroCard from "./HeroCard.svelte";
</script>
<div class="h-screen w-screen flex flex-row justify-center items-center text-7xl space-x-20">
    <HeroCard name="Politicien" desc="Mentez pour gagner" logoRoute="../public/politician.png"></HeroCard>
    <HeroCard name="Personnes agées" desc="Vous êtes à la retraite" logoRoute="../public/old.png"></HeroCard>
    <HeroCard name="Personnes agées" desc="Vous êtes à la retraite" logoRoute="../public/old.png"></HeroCard>
</div>

<style>
    .hello-emoji {
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
    }

    @keyframes wave-animation {
        0% {
            transform: rotate(0deg);
        }
        15% {
            transform: rotate(14deg);
        }
        30% {
            transform: rotate(-8deg);
        }
        40% {
            transform: rotate(14deg);
        }
        50% {
            transform: rotate(-4deg);
        }
        60% {
            transform: rotate(10deg);
        }
        70% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>