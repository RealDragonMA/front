<script lang="ts">

    import {Route, Router} from "svelte-routing";
    import Dashboard from "./components/dashboard/Dashboard.svelte";
    import Homepage from "./Homepage.svelte";
</script>


<Router>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/" component={Homepage}/>
</Router>

