/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			screens: {

        		"mac": "1440px",

      		},
			colors: {

				"thrive_black": "#443f35",
				"thrive_green": "#698237",
				"thrive_dark_green": "#556c25",
				"thrive_orange": "#db7803",
				"thrive_yellow": "#f5d74f",
				"thrive_light_gray": "#b1b4ae",
				"thrive_light_green": "#e3e4d9"

			},
			fontFamily: {


			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
