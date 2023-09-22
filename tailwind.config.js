/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            smallMobile: "280px",
            mobile: "320px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
            largeDesktop: "1920px",
        },
        extend: {
            animation: {
                glow: "glow 2.5s ease-in infinite;",
            },
            keyframes: {
                glow: {
                    "0%": {
                        backgroundColor: "#9d4dff",
                        boxShadow: "0 0 15px 0 #9d4dff",
                    },
                    "10%": {
                        backgroundColor: "#811aff",
                        boxShadow: "0 0 13px 0 #9d4dff",
                    },
                    "20%": {
                        backgroundColor: "#6700e6",
                        boxShadow: "0 0 11px 0 #9d4dff",
                    },
                    "30%": {
                        backgroundColor: "#5000b3",
                        boxShadow: "0 0 9px 0 #9d4dff",
                    },
                    "40%": {
                        backgroundColor: "#390080",
                        boxShadow: "0 0 7px 0 #9d4dff",
                    },
                    "50%": {
                        backgroundColor: "#390080",
                        boxShadow: "0 0 5px 0 #9d4dff",
                    },
                    "60%": {
                        backgroundColor: "#350078",
                        boxShadow: "0 0 7px 0 #9d4dff",
                    },
                    "70%": {
                        backgroundColor: "#450099",
                        boxShadow: "0 0 9px 0 #9d4dff",
                    },
                    "80%": {
                        backgroundColor: "#5c00cc",
                        boxShadow: "0 0 11px 0 #9d4dff",
                    },
                    "90%": {
                        backgroundColor: "#7300ff",
                        boxShadow: "0 0 13px 0 #9d4dff",
                    },
                    "100%": {
                        backgroundColor: "#8f33ff",
                        boxShadow: "0 0 15px 0px #9d4dff",
                    },
                }
            },
        },
    },
    plugins: [],
};
