<script>
  import Nav from "../components/Nav.svelte";
  import Title from "../components/Title.svelte";

  //   export let segment;
</script>

<style lang="scss" global>
  @import "../styles/global.scss";

  main {
    display: grid;
    place-items: center;
  }
</style>

<!-- <Nav {segment} /> -->
<main>
  <slot />
</main>
