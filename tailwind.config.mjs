/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	darkMode: 'class',
	theme: {
        extend: {
            animation: {
				"fade-in-left": "fade-in-left 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
				"fade-in-right": "fade-in-right 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
				"fade-in-top": "fade-in-top 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
				heartbeat: "heartbeat 1.5s ease  infinite both",
				"fade-in-bck": "fade-in-bck 3.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
            },
            keyframes: {
				"fade-in-bck": {
                    "0%": {
                        transform: "translateZ(80px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateZ(0)",
                        opacity: "1"
                    }
                },
				"fade-in-left": {
                    "0%": {
                        transform: "translateX(-50px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateX(0)",
                        opacity: "1"
                    }
                },
				"fade-in-right": {
                    "0%": {
                        transform: "translateX(50px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateX(0)",
                        opacity: "1"
                    }
                },
				"fade-in-top": {
                    "0%": {
                        transform: "translateY(-50px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1"
                    }
                },
				heartbeat: {
                    "0%": {
                        transform: "scale(1)",
                        "transform-origin": "center center",
                        "animation-timing-function": "ease-out"
                    },
                    "10%": {
                        transform: "scale(.91)",
                        "animation-timing-function": "ease-in"
                    },
                    "17%": {
                        transform: "scale(.98)",
                        "animation-timing-function": "ease-out"
                    },
                    "33%": {
                        transform: "scale(.87)",
                        "animation-timing-function": "ease-in"
                    },
                    "45%": {
                        transform: "scale(1)",
                        "animation-timing-function": "ease-out"
                    }
                }
            }
        }
    },
	plugins: [
		addDynamicIconSelectors(),
	],
};
