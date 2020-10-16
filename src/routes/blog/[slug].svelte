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
</script>

<style lang="scss">
  article {
    grid-column: center-start / center-end;
  }

  img {
    display: inline-block;
    width: 100%;
  }
</style>

<svelte:head>
  <Title>{article.title}</Title>
</svelte:head>

<article>
  {#if article.cover_img}
    <img src={article.cover_img} alt={article.title} />
  {/if}
  <h1>{article.title}</h1>
  <small>Published on {article.updated_at}</small>
  <p>{article.content}</p>
</article>
