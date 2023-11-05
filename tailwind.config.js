/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [addTailwindVariables],
};

// This plugin adds each Tailwind color, width, boxShadow as a global CSS variable, e.g. var(--gray-200).
function addTailwindVariables({ addBase, theme }) {
  const colorEntries = Object.entries(flattenColorPalette(theme("colors"))).map(
    ([key, val]) => [`--${key}`, val]
  );

  const blurEntries = Object.entries(theme("blur")).map(([key, val]) => [
    `--blur-${key}`,
    `blur(${val})`,
  ]);

  let newVars = Object.fromEntries([...colorEntries, ...blurEntries]);

  addBase({
    ":root": newVars,
  });
}
