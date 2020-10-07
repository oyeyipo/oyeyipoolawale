<script>
  import { svg_element } from "svelte/internal";
</script>

<style lang="scss">
  svg {
    width: var(--ss-rem-8);
    height: var(--ss-rem-8);
    fill: var(--color-primary-800);
  }

  .social {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
    gap: var(--ss-rem-8);
  }

  a {
    display: block;
  }
</style>

<!-- <h3 class="title heading-4">Social</h3> -->
<div class="social">
  <a
    href="https://www.linkedin.com/in/olawale-oyeyipo-7a5b36b7/"
    rel="external noopener noreferrer"
    target="_blank">
    <svg>
      <use xlink:href="sprite.svg#icon-linkedin" />
    </svg>
  </a>
  <a
    href="https://stackoverflow.com/users/7024331/oyeyipowale"
    rel="external noopener noreferrer"
    target="_blank">
    <svg>
      <use xlink:href="sprite.svg#icon-stackoverflow" />
    </svg>
  </a>
  <a
    href="https://github.com/oyeyipowale"
    rel="external noopener noreferrer"
    target="_blank">
    <svg>
      <use xlink:href="sprite.svg#icon-github" />
    </svg>
  </a>
</div>
