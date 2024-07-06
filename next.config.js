const isProduction = process.env.NODE_ENV === "production";
const repository = process.env.REPO_NAME ?? "";
const assetPrefix = isProduction ? `/${repository}` : "";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  output: "export",
  distDir: "build",
  assetPrefix,
});

module.exports = nextConfig;
