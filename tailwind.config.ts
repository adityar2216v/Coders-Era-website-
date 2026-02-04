import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                },
                "coders-midnight": "#0B1220",
                "era-blue": "#13203A",
                "quantum-cyan": "#22D3EE",
                "signal-coral": "#FB7185",
                "soft-cloud": "#F1F5F9",
                "pure-intent": "#E2E8F0",
                "steel-grey": "#94A3B8",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-space-grotesk)"],
            },
        },
    },
    plugins: [],
};
export default config;
