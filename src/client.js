import * as sapper from "@sapper/app";

sapper
  .start({
    target: document.querySelector("#olawale"),
  })
  .then(() => {
    console.log("olawale svelte/sapper app has started");
  });
