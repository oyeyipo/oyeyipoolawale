<!--<script context="module" ✂prettier:content✂="CiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSwgc2Vzc2lvbikgewogICAgY29uc3QgcmVzdWx0c2VydmVyID0gYXdhaXQgdGhpcy5mZXRjaChgcG9zdHMuanNvbmApOwogICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3RzL2AsIHsKICAgICAgbWV0aG9kOiAiR0VUIiwKICAgICAgaGVhZGVyczogewogICAgICAgICJDb250ZW50LVR5cGUiOiAiYXBwbGljYXRpb24vanNvbiIsCiAgICAgICAgQWNjZXB0OiAiYXBwbGljYXRpb24vanNvbiIsCiAgICAgIH0sCiAgICB9KTsKCiAgICBjb25zdCBwYXJzZWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7CgogICAgaWYgKHBhcnNlZC5lcnJvcikgewogICAgICByZXR1cm4gdGhpcy5lcnJvcihyZXNwb25zZS5zdGF0dXMsIHBhcnNlZC5lcnJvcik7CiAgICB9CgogICAgcmV0dXJuIHsKICAgICAgYXJ0aWNsZXM6IHBhcnNlZCwKICAgIH07CiAgfQo=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>-->
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
  <p>Delete</p>
  <!-- <h5>Articles</h5>
  <pre>
    {JSON.stringify(items, null, 2)}
</pre> -->
</div>
