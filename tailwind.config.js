/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				magnifico: ["magnifico", "sans-serif"],
				bauhaus: ["bauhaus", "sans-serif"],
				noland: ["noland", "sans-serif"],
			},
		},
	},
	plugins: [],
};
