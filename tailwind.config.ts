import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "var(--primary-10)",
          20: "var(--primary-20)",
          30: "var(--primary-30)",
          40: "var(--primary-40)",
          50: "var(--primary-50)",
          DEFAULT: "var(--primary)",
          70: "var(--primary-70)",
          80: "var(--primary-80)",
          text: "var(--primary-text)",
        },
        secondary: {
          text: "var(--secondary-text)",
        },
        neutral: {
          10: "var(--neutral-10)",
          20: "var(--neutral-20)",
          30: "var(--neutral-30)",
          40: "var(--neutral-40)",
          50: "var(--neutral-50)",
          DEFAULT: "var(--neutral)",
          70: "var(--neutral-70)",
          80: "var(--neutral-80)",
        },
        success: {
          10: "var(--success-10)",
          30: "var(--success-30)",
          50: "var(--success-50)",
          60: "var(--success-60)",
          80: "var(--success-80)",
        },
      },
      fontSize: {
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        "body-regular": "var(--body-regular)",
        "body-small": "var(--body-small)",
        "body-ultra-small": "var(--body-ultra-small)",
      },
      spacing: {
        1: "var(--spacing-1)",
        2: "var(--spacing-2)",
        3: "var(--spacing-3)",
        4: "var(--spacing-4)",
        5: "var(--spacing-5)",
        6: "var(--spacing-6)",
        7: "var(--spacing-7)",
        8: "var(--spacing-8)",
        9: "var(--spacing-9)",
        10: "var(--spacing-10)",
        11: "var(--spacing-11)",
        12: "var(--spacing-12)",
        13: "var(--spacing-13)",
        14: "var(--spacing-14)",
        15: "var(--spacing-15)",
      }
    },
  },
  plugins: [],
} satisfies Config;
