module.exports = {
  siteMetadata: {
    title: `protestingworks.com`,
    titleTemplate: "%s · protestingworks.com",
    description: `Preserving and indexing protests`,
    url: "https://www.protestingworks.com", // No trailing slash allowed!
    image: "/favicon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@andrew_bytes",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-netlify`, // make sure to keep it last in the array
  ],
};
