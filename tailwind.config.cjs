module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
		  {
			mytheme: {
			
   "primary": "#76FF03",
			
   "secondary": "#000000",
			
   "accent": "#7cff70",
			
   "neutral": "#1B1622",
			
   "base-100": "#31204B",
			
   "info": "#1f2937",
			
   "success": "#3FE47E",
			
   "warning": "#F3A916",
			
   "error": "#FA1E22",
			},
		  },
		],
	  },
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
