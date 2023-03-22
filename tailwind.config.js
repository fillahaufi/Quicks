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
                "bubble-chat-purple": "#EEDCFF",
                "bubble-chat-orange": "#FCEED3",
                "bubble-chat-green": "#D2F2EA",
                "txt-default": "#4F4F4F",
                "txt-chat-purple": "#9B51E0",
                "txt-chat-orange": "#E5A443",
                "txt-chat-green": "#43B78D",
            },
        },
    },
    daisyui: {
        theme: ["dark", "light"],
    },
    plugins: [require("daisyui")],
};
