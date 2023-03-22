/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "quick-blue": "#2F80ED",
                "quick-purple": "#8785FF",
                "quick-orange": "#F8B76B",
                "quick-disabled": "#4F4F4F",
            },
        },
    },
    daisyui: {
        theme: ["dark", "light"],
    },
    plugins: [require("daisyui")],
};
