<script>
  import Title from "../components/Title.svelte";
  import Social from "../components/Social.svelte";
</script>

<style lang="scss">
  h1 {
    line-height: 1;

    > span {
      display: block;
    }

    .first {
      font-size: var(--ss-rem-7);
      color: var(--color-primary-300);
    }
    .main {
      font-size: var(--ss-rem-8);
    }
  }
  p {
    text-transform: capitalize;
    font-size: var(--ss-rem-5);
  }

  .jumbotron {
    background-color: var(--color-primary-100);
    padding: var(--ss-rem-6);
    width: 100%;

    display: grid;
    row-gap: var(--ss-rem-4);
  }
</style>

<svelte:head>
  <Title>Home</Title>
</svelte:head>

<div class="jumbotron">
  <h1>
    <span class="first">Hi, </span>
    <span class="main">I'm Olawale Oyeyipo</span>
  </h1>
  <p>Software Developer/Writer who loves to solve problems and teach.</p>

  <Social />
</div>
