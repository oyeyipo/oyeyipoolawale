import * as sapper from "@sapper/app";

sapper
  .start({
    target: document.body,
  })
  .then(() => {
    console.log("olawale svelte/sapper app has started");
  });
