import React from "react";
import type { HeadFC } from "gatsby";

import useSiteMetadata from "@/hooks/useSiteMetadata";

const Head: HeadFC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <html lang="en" />
      <meta name="description" content={siteMetadata.description} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:image" content={siteMetadata.ogImageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteMetadata.title} />
      <meta property="twitter:url" content={siteMetadata.siteUrl} />
      <meta property="twitter:description" content={siteMetadata.description} />
      <link rel="icon" type="image/png" href={siteMetadata.faviconUrl} />
      <title>{siteMetadata.title}</title>
      <body />
    </>
  );
};

export default Head;
