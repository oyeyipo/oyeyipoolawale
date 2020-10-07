<script>
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
    row-gap: var(--ss-rem-6);
    list-style: none;
  }
</style>

<div class="wrapper">
  <!-- Heading -->
  <h3>Blog</h3>
  <!-- Article list -->
  <ul class="list">
    <li>
        <h4>Python: deconstructing dict() of the standard library</h4>
    </li>
    <li>
        <h4>Reading C++ code from python</h4>
    </li>
    <li>
        <h4>Submit your first pull request: actual guide</h4>
    </li>
    <li>
        <h4>Lifecycle of pyQT application</h4>
    </li>
</ul>
</div>
