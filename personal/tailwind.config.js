/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				pattern1:
					" repeating-linear-gradient(-45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 1px, transparent 1px, transparent 6px);",
				pattern2:
					"repeating-linear-gradient(36deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 1px, transparent 0px, transparent 2px)",
			},
			backgroundSize: {},
			height: {
				half: "80vh",
			},
			animation: {
				jump: "jump 2s cubic-bezier(0.5, 0, 0.5, 1) 2",
			},
			colors: {
				"grey-1": "#111111",
				"grey-2": "#BFBFBF",
				"kola-1": "#964A52",
				"kola-2": "#7C382F",
				"kola-3": "#A87843",
				"kola-4": "#C69364",
				"kola-5": "#A94652",
				"kola-6": "#9F0925",
				"black-5": "#111111",
				"black-6": "#060100",
				"yellow-6": "#F3C40F",
				"yellow-7": "#b08e0c",
			},
			keyframes: {
				jump: {
					"0%": {
						transform: "translateY(0)",
					},
					"30%": {
						transform: "translateY(-100px)",
					},
					"50%": {
						transform: "trnaslateY(0)",
					},
					"100%": {
						transform: "trnaslateY(0)",
					},
				},
			},
		},
	},
	plugins: [],
};
