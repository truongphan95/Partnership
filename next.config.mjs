// GITHUB_PAGES=true is set only by .github/workflows/deploy.yml. Local `next dev`
// and `next start` keep the normal server build.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isPages && {
    // Plain HTML/CSS/JS in out/, which GitHub Pages can serve.
    output: "export",
    basePath,
    // Pages serves folder/index.html, so /partner/tl/ resolves without a server.
    trailingSlash: true,
  }),
  images: {
    // No image server on GitHub Pages: photos ship pre-sized from public/partner.
    unoptimized: isPages,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
