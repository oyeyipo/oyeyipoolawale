<script>
  export let articles;

  let articleList = articles.results;
  const isEmpty = articleList == undefined || articleList.length == 0;

  $: items = articleList;
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
    // box-shadow: 0.5rem 0.5rem 0 0 var(--color-primary-900);
    background-color: var(--color-primary-900);
    color: var(--color-primary-100);
  }

  h4 {
    line-height: var(--line-height);
  }

  ul {
    display: grid;
    row-gap: var(--ss-rem-8);
    list-style: none;
  }

  a {
    &:link,
    &:visited {
      color: var(--color-primary-700);
      text-decoration: none;
    }

    &:hover,
    &:active {
      text-decoration: underline;
      color: currentColor;
    }
  }
</style>

<div class="wrapper">
  {#if !isEmpty}
    <!-- Heading -->
    <h3>Blog</h3>
    <!-- Article list -->
    <ul>
          {#each items as post}
            <li>
                <a href="blog/{post.slug}">
                    <h4>{post.title}</h4>
                </a>
            </li>
          {/each}
        </ul>
  {/if}
</div>
