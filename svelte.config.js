import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'

const dev = "production" === "development";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
    	assets: 'build',
    	fallback: null
		}),
		paths: {
            // change below to your repo name
            base: dev ? "" : "",
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
