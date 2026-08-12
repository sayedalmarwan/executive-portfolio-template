const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";

if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY
    ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
    : "executive-portfolio-template";
  repo = `/${repoName}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: repo,
  assetPrefix: repo ? `${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
