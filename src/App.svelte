<script lang="ts">

    import {Route, Router} from "svelte-routing";
    import Dashboard from "./components/dashboard/Dashboard.svelte";
    import Homepage from "./Homepage.svelte";
    import Error404 from "./Error404.svelte";
</script>

<Router>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/" component={Homepage}/>
    <div class="h-screen w-screen flex flex-row justify-center items-center text-7xl">
    <Route component="{Error404}"/>
    </div>
</Router>

