<script lang="ts">
    import { Route, Router } from "svelte-routing";
    import Index from "./Index.svelte";





</script>

<div class="flex flex-col">
        <Router>
            <Route component={Index} path="/" />
        </Router>
</div>
