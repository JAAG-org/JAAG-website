<script>
    import { onMount } from "svelte";
    import { createScene } from "../scenes/scene";
    let el;

    onMount(() => {
        createScene(el);
    });
</script>

<canvas bind:this={el} />
<div class="scene1"> </div>
<div class="scene2"> </div>

<style>
    canvas {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .scene1 {
        width: 100%;
        height: 20vh;
        position: relative;
    }

    .scene2 {
        width: 100%;
        height: 20vh;
        position: relative;
    }
</style>


