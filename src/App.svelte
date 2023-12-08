<script lang="ts">

    import {navigate, Route, Router} from "svelte-routing";
    import Dashboard from "./components/dashboard/Dashboard.svelte";
    import Homepage from "./Homepage.svelte";
    import Error404 from "./Error404.svelte";
    import {onMount} from "svelte";

    let inputText = "";
    let typingTimeout: NodeJS.Timeout | null = null;

    const handleKeyDown = (event: KeyboardEvent) => {
        const pressedKey = event.key.toLowerCase();
        inputText += pressedKey;

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        typingTimeout = setTimeout(() => {
            if (inputText === "emoji") {
                //@ts-ignore
                emojisplosions()
            }
            if (inputText === "rick") {
                navigate("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {replace: true})
            }

            inputText = ""; // Réinitialisez le texte après le délai
        }, 1000);
    };

    onMount(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });

</script>

<Router>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/" component={Homepage}/>
    <div class="w-full flex flex-row justify-center items-center text-7xl">
        <Route component="{Error404}"/>
    </div>
</Router>

