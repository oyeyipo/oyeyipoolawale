<script>
  export let segment;
</script>

<style lang="scss">
  .header {
    background-color: bisque;
    border-bottom: 1px solid hsla(225, 0%, 0%, 0.2);
    height: 7rem;
    width: 100%;

    display: flex;
    align-items: center;

    & .logo-box {
      background-color: green;
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;

    li {
      font-weight: bold;
    }
  }

  a {
    text-decoration: none;
  }

  [aria-current] {
    color: paleturquoise;
  }
</style>

<!--
 @component
 Here's some documentation for this component. It will show up on hover for
 JavaScript/TypeScript projects using a LSP-compatible editor such as VSCode or
 Vim/Neovim with coc.nvim.

 - You can use markdown here.
 - You can use code blocks here.
 - JSDoc/TSDoc will be respected by LSP-compatible editors.
 - Indentation will be respected as much as possible.
-->

<header class="header">
  <div class="logo-box"><a href="/">Oyeyipo Olawale</a></div>

  <nav>
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          home
        </a>
      </li>
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          about
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          blog
        </a>
      </li>
    </ul>
  </nav>
</header>
