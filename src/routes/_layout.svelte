<script>
  //   import Nav from "../components/Nav.svelte";
  //   import Title from "../components/Title.svelte";

  //   export let segment;
</script>

<style lang="scss" global>
  @import "../styles/global.scss";

  main {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }
</style>

<!-- <Nav {segment} /> -->
<main>
  <slot />
</main>
