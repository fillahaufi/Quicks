/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        "bg-[#E5F1FF]",
        "hover:bg-[#E5F1FF]",
        "border-[#E5F1FF]",
        "hover:border-[#E5F1FF]",

        "bg-[#FDCFA4]",
        "hover:bg-[#FDCFA4]",
        "border-[#FDCFA4]",
        "hover:border-[#FDCFA4]",

        "bg-[#F9E9C3]",
        "hover:bg-[#F9E9C3]",
        "border-[#F9E9C3]",
        "hover:border-[#F9E9C3]",

        "bg-[#AFEBDB]",
        "hover:bg-[#AFEBDB]",
        "border-[#AFEBDB]",
        "hover:border-[#AFEBDB]",

        "bg-[#CBF1C2]",
        "hover:bg-[#CBF1C2]",
        "border-[#CBF1C2]",
        "hover:border-[#CBF1C2]",

        "bg-[#CFCEF9]",
        "hover:bg-[#CFCEF9]",
        "border-[#CFCEF9]",
        "hover:border-[#CFCEF9]",

        "bg-[#F9E0FD]",
        "hover:bg-[#F9E0FD]",
        "border-[#F9E0FD]",
        "hover:border-[#F9E0FD]",

        "bg-[#9DD0ED]",
        "hover:bg-[#9DD0ED]",
        "border-[#9DD0ED]",
        "hover:border-[#9DD0ED]",
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
            transitionProperty: {
                height: "height",
            },
        },
    },
    daisyui: {
        theme: ["dark", "light"],
    },
    plugins: [require("daisyui")],
};
