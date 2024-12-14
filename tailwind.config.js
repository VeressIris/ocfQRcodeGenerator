/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				texture: "url('/static/background.png')"
			}
		},
		colors: {
			red: {
				100: '#ca052d',
				200: '#a70522',
				300: '#720218'
			},
			green: '#0a4530',
			yellow: {
				100: '#fff9d2',
				200: '#ffde8b'
			},
			orange: {
				100: '#ffb330',
				200: '#f2a82a',
				300: '#e39b1f',
				400: '#f87b37',
				500: '#df6f31',
				600: '#cd6023'
			}
		}
	},
	plugins: []
};
