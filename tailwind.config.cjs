/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkCyan: '#3C8067',
				cream: '#F2EBE3',
				darkBlue: '#1C232B',
				darkGrayishBlue: '#6C7289'
			},
			fontFamily: {
				serif: 'Fraunces',
				sans: 'Montserrat'
			}
		}
	},
	plugins: []
};
