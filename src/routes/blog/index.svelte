<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style lang="scss">
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;

    a {
      text-decoration: none;
      color: var(--color-primary-700);
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>
