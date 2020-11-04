<script context="module">
  import { baseUrl } from "../_common/conf";

  export async function preload(page, session) {
    const { slug } = page.params;

    const res = await this.fetch(`${baseUrl}/api/posts/${slug}/`);
    const article = await res.json();

    return { article };
  }
</script>

<script>
  import Title from "../../components/Title.svelte";

  export let article;

  function formatedDate() {
    return new Date(article.updated_at).toLocaleString();
  }
</script>

<style lang="scss">
  article {
    grid-column: center-start / center-end;
    margin-top: 2rem;

    display: grid;
    gap: 1rem;
  }

  img {
    display: inline-block;
    width: 100%;
  }

  h1 {
    line-height: 1.2;
  }

  small {
    color: var(--color-primary-300);
  }
</style>

<svelte:head>
  <Title>{article.title}</Title>
</svelte:head>

<article>
  <!-- {#if article.cover_img}
    <img src={article.cover_img} alt={article.title} />
  {/if} -->
  <div class="title-box">
    <h1>{article.title}</h1>
    <small>Published on {formatedDate()}</small>
  </div>
  <p>{article.content}</p>
</article>
