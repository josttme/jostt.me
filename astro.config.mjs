import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import astroSitemap from 'astro-sitemap'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), astroSitemap()],
	vite: {
		assetsInclude: ['/nunito.regular.woff2']
	},
	server: {
		host: true
	}
})
