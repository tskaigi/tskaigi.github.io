const isProduction = process.env.NODE_ENV === "production";
const repository = process.env.REPO_NAME ?? "";
const assetPrefix = isProduction ? `/${repository}` : "";
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
	distDir: 'build',
  assetPrefix,
}

module.exports = nextConfig
