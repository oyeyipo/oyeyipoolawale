<script>
  export let segment;
</script>

<style>
  .header {
    background-color: bisque;
    height: 7rem;
    width: 100%;

    display: flex;
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  [aria-current] {
    color: red;
  }
</style>

<header class="header">
  <div class="logo-box">
    <a href="/">Oyeyipo Olawale</a>
  </div>

  <nav>
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          🏠 home
        </a>
      </li>
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          🙋‍♂️ about
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          📰 blog
        </a>
      </li>
    </ul>
  </nav>

</header>
