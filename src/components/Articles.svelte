<script>
  export let articles;

  $: items = articles.results;
</script>

<style lang="scss">
  .wrapper {
    margin: var(--ss-rem-9) 0;
    grid-column: center-start / center-end;

    display: grid;
    row-gap: var(--ss-rem-8);
    justify-items: start;
  }

  h3 {
    display: inline-block;
    padding: 0 0.6rem;
    box-shadow: 0.5rem 0.5rem 0 0 var(--color-primary-900);
    background-color: var(--color-primary-200);
    color: var(--color-primary-800);
  }

  h4 {
    line-height: var(--line-height);
  }

  .list {
    display: grid;
    row-gap: var(--ss-rem-8);
    list-style: none;
  }
</style>

<div class="wrapper">
  <!-- Heading -->
  <h3>Blog</h3>
  <!-- Article list -->
  <ul class="list">
      {#if items}
          {#each items as post}
            <li>
                <a href="#">
                    <h4>{post.title}</h4>
                </a>
            </li>
          {/each}
      {/if}
    </ul>
  <!-- <h5>Articles</h5>
  <pre>
    {JSON.stringify(items, null, 2)}
</pre> -->
</div>
