import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

const dev = "production" === "development";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		prerender : { default: true},
		adapter: adapter({
			pages: 'docs',
    	assets: 'docs',
    	fallback: null
		}),
		paths: {
            // change below to your repo name
            base: dev ? "/joaquinbeltran1.github.io/joaquinbeltran1.github.io" : "",
        },
	},
	extensions: ['.svelte', '.md'],
	
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/_post.svelte'
			  }
    })
  ]
};

export default config;
