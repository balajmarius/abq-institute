import { graphql, useStaticQuery } from "gatsby";

export type GatsbyConfigSiteMetadata = {
  title: string;
  description: string;
  siteUrl: string;
  faviconUrl: string;
  ogImageUrl: string;
};

const useSiteMetadata = () => {
  const data = useStaticQuery<{
    site: { siteMetadata: GatsbyConfigSiteMetadata };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          faviconUrl
          ogImageUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
