<script>
  import './$layout.svelte'
  
  import Navigator from './lib/Navigator.svelte';
  import About from './pages/About.svelte';
  import Home from './pages/Home.svelte';
  
  import { Router, Route } from "svelte-routing";

  export let url = "/";

</script>

<main>
  <Router url="{url}">
    <Navigator />
    <Route path="/about" component="{About}" />
    <Route path="/" component="{Home}" />
  </Router>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    margin: 0 auto;
  }
</style>
