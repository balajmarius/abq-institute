import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "ABQ.institute — Future Proofing Humanity",
    description: `We are at the forefront of exploring the profound impacts that the convergence of Artificial Intelligence, Blockchain, and Quantum Computing exerts on our society and its economic frameworks.`,
    siteUrl: "https://abq.institute",
    faviconUrl: "/images/favicon-32x32.png",
    ogImageUrl: "/images/social-1200x630.png",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
    },
    {
      resolve: "gatsby-alias-imports",
      options: { aliases: { "@": "src" } },
    },
  ],
};

export default config;
