<script>
  import Title from "../components/Title.svelte";
  import Social from "../components/Social.svelte";
</script>

<style lang="scss">
  h1 {
    line-height: var(--line-height-sm);

    > span {
      display: block;
    }

    .sub {
      font-size: var(--ss-rem-7);
      color: var(--color-primary-300);
    }
    .main {
      font-size: var(--ss-rem-9);
    }
  }
  p {
    text-transform: capitalize;
    font-size: var(--ss-rem-6);
    font-weight: var(--font-weight-3);
  }

  .header {
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

<header class="header">
  <h1>
    <span class="sub">Hi, </span>
    <span class="main">I'm Wale Oyeyipo</span>
  </h1>
  <p>Software Developer/Writer that loves to solve problems and teach.</p>

  <Social />
</header>
