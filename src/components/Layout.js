import React from "react";
import { useSiteMetadata } from "./useSiteMetadata";
import { Helmet } from "react-helmet";
import { Navbar } from "./Navbar";

import "../../tailwind.css";

export function Layout({ children }) {
  const { title, description } = useSiteMetadata();

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/svg"
          href={SvgInitialsBlock}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        /> */}

        {/* <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        /> */}
      </Helmet>
      <div className="max-w-full min-h-screen bg-gray-100">
        <Navbar />
        <div className="py-10">{children}</div>
      </div>
    </React.Fragment>
  );
}
