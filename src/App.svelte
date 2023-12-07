<script lang="ts">
    import {Route, Router} from 'svelte-routing'
    import Description from "./Description.svelte";
</script>



<Router>
    <Route path="/" component={Description} />
</Router>