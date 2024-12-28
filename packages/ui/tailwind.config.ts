import sharedConfig from "../config-tailwind/tailwind.config";
import { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  ...sharedConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [animatePlugin],
};

export default config;
