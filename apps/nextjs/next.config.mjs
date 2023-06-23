import nextMDX from "@next/mdx";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import("next").NextConfig} */
const config = {
  // Enables hot reloading for local packages without a build step
  transpilePackages: ["@acme/api", "@acme/auth", "@acme/db"],
  // We already do linting and typechecking as separate tasks in CI
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

// Merge MDX config with Next.js config
export default withMDX(config);
