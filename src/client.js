import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
	console.log("olawale svelte app has started");
});