import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
    implementation: "sass-embedded",
  },
  output: "standalone",
};

export default nextConfig;
