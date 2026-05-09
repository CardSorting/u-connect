// [LAYER: INFRASTRUCTURE] ESLint flat config wiring for Next.js 16 validation.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
];

export default config;