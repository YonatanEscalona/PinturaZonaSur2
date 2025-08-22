// tailwind.config.js
module.exports = {
    content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF", // Azul personalizado
                secondary: "#F59E0B", // Amarillo personalizado
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [],
};