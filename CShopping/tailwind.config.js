/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#A67458",
				navbarColor: "#3E848C",
				labelColor: "#7AB8BF",
				white: "#fff",
			},
			fontFamily: {
				jetbrain: ["JetBrains Mono", "monospace"],
			},
			fontSize: {
				label: [
					"14px",
					{
						lineHeight: "normal",
						fontWeight: "500",
					},
				],
			},
			boxShadow: {
				login: "2px 5px 10px 0px rgba(0, 0 , 0, 0.1)",
			},
		},
	},
	plugins: [],
};
