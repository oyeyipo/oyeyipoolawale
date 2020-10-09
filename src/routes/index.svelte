<script context="module">
  import { baseUrl } from "./_common/conf.js";

  export async function preload(page, session) {
    const response = await this.fetch(`${baseUrl}/api/posts/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const articles = await response.json();

    if (articles.error) {
      return this.error(response.status, articles.error);
    }

    return {
      articles,
    };
  }
</script>

<script>
  import Title from "../components/Title.svelte";
  import Social from "../components/Social.svelte";
  import Articles from "../components/Articles.svelte";

  export let articles;
</script>

<style lang="scss">
  h1 {
    line-height: var(--line-height-sm);

    > span {
      display: block;
    }

    .sub {
      font-size: var(--ss-rem-7);
      color: var(--color-primary-400);
    }
    .main {
      font-size: var(--ss-rem-9);
    }
  }
  p {
    text-transform: capitalize;
    font-size: var(--ss-rem-7);
    font-weight: var(--font-weight-3);
  }

  .jumbotron {
    background-color: var(--color-primary-100);
    padding: var(--ss-rem-9) var(--ss-rem-6) var(--ss-rem-6);
    width: 100%;

    grid-column: full-start / full-end;

    display: grid;
    align-items: center;
    justify-items: start;
    row-gap: var(--ss-rem-8);
  }
</style>

<svelte:head>
  <Title>Home</Title>
</svelte:head>

<div class="jumbotron">
  <div>
    <h1>
      <span class="sub">Hi, I am</span>
      <span class="main">Wale Oyeyipo</span>
    </h1>
    <p>Software Developer/Writer that loves to solve problems and teach.</p>
  </div>
  <Social />
</div>

<Articles {articles} />
