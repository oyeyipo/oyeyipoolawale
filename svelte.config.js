const sveltePreprocess = require("svelte-preprocess");

function createPreprocessors(sourceMap) {
  return sveltePreprocess({
    sourceMap,
    defaults: {
      style: "scss",
    },
    scss: {
      prependData: `@import 'static/scss/variables.scss';`,
    },
    postcss: {
      plugins: [require("autoprefixer")()],
    },
  });
}

module.exports = {
  preprocess: createPreprocessors(true),
  createPreprocessors,
};
