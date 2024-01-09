/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: {
				100: '#000',
				200: '#333',
				300: '#666',
				400: '#999',
				500: '#AAA',
				600: '#f5efe8',
				700: '#CCC',
				800: '#DDD',
				900: '#EEE',
			},
			sky: {
				100: '#A3C2E0',
				300: '#74A3D1',
				500: '#336699',
			},
			blue: colors.blue,
		},
		fontSize: {
			'sm': '10px',
			'md': '20px',
			'lg': '25px',
			'xl': '40px',
			'2xl': '50px',
		},
		extend: {
			boxShadow:{
				'3xl': '1px 1px 10px 1px rgba(0,0,0,0.2)',
			},
			backgroundImage: {
				'portada': "url('/TheRodrillas_fullhd.png')",
				'mancha': "url('/mancha.png')",
				'stars': "url('/bg_stars.png')",
				'corner': "url('/corner_flowers.png')",
				'fondo-nubes': "url('/fondo_rodrillas.png')",
				'fondo-campo': "url('/fondo_campo.png')",
				'text-rodrillas': "url('/texto_rodrillas.png')",
				'steps': "url('/steps.png')",
				'acuarela': "url('/acuarela.svg')",
			},
			animation:{
				'zoom': 'zoom 3s ease 0s forwards',
				'zoomIn': 'zoomIn 6s ease 0s forwards',
			},
			keyframes:{
				'zoom':{
					'from':{opacity:0,transform: 'scale(0.3)'},
					'90%':{opacity:1,transform: 'scale(1.5)', height:'auto'},
				},
				'zoomIn':{
					'from':{'transform':'scale(0)'},
					'50%': {'transform':'scale(0)'},
					'100%':{'transform':'scale(1)'},
				}
			}
		},
	},
	plugins: [
		require("daisyui")
	],
}


