import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sleeker-ways.github.io/sleeker-css-docs',
	base: '/sleeker-css-docs',
	integrations: [
		starlight({
			logo: {
					src: './src/assets/logo/logo-transparent.png',
					alt: 'sleeker css',
									replacesTitle: true,
			},
			title: 'SleekerCSS',
			description: "A modern and sleeker utility-class framework",
			social: {
				github: 'https://github.com/sleeker-ways/sleeker-css',
			},
				customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
				'./src/fonts/font-face.css',
				'@fontsource/inter/400.css',
				'@fontsource/inter/600.css',
				'@fontsource/jetbrains-mono/400.css'
			],
			sidebar: [
						{
					label: 'Geting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Install', link: '/install/' },
						{ label: 'Why SleekerCSS', link: '/why/' },
						{ label: 'Quick Learn', link: '/quick-learn/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
				{
					label: 'Tools',
					items : [
						{	label: 'migrate from TailwindCSS', link: '/migrate-from-tailwind/' },
					]

				},
			],
		
		}),
	],
});
