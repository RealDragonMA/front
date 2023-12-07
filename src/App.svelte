<script>
    import HeroCard from "./HeroCard.svelte";
</script>
<div class="h-screen w-screen flex flex-row justify-center items-center text-7xl space-x-20">
    <HeroCard name="Politicien" desc="Mentez pour gagner" logoRoute="../public/politician.png"></HeroCard>
    <HeroCard name="Personnes agées" desc="Vous êtes à la retraite" logoRoute="../public/old.png"></HeroCard>
    <HeroCard name="Ecolo" desc="Vous aimez l'herbe" logoRoute="../public/farmer.png"></HeroCard>
</div>
