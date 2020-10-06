<script>
  import { svg_element } from "svelte/internal";
</script>

<style lang="scss">
  .title {
    font-size: var(--ss-rem-5);
  }
  svg {
    width: var(--ss-rem-6);
    height: var(--ss-rem-6);
  }

  .social {
    display: grid;
    grid-auto-flow: column;
  }
</style>

<div class="title">Connect</div>
<div class="social">
  <a href="#" rel="noreferrer">
    <svg>
      <use xlink:href="sprite.svg#icon-linkedin" />
    </svg>
  </a>
  <a href="#" rel="noreferrer">
    <svg>
      <use xlink:href="sprite.svg#icon-stackoverflow" />
    </svg>
  </a>
  <a href="#" rel="noreferrer">
    <svg>
      <use xlink:href="sprite.svg#icon-github" />
    </svg>
  </a>
</div>
