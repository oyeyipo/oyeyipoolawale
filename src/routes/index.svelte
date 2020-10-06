<script>
  import Title from "../components/Title.svelte";
</script>

<style lang="scss">
  .container {
    display: grid;
    place-items: center;
  }

  h1 {
    color: $col;
    background-color: $primary-color;
  }
</style>

<svelte:head>
  <Title>Home</Title>
</svelte:head>

<div class="container">
  <h1>Hey, I'm Olawale Oyeyipo 👨‍💻_</h1>

  <p>Software Developer/Writer who loves to solve problems and teach.</p>
</div>
