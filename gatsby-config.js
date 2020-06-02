module.exports = {
  siteMetadata: {
    title: `protestingworks.com`,
    description: `Preserving and indexing protests`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`, // make sure to keep it last in the array
  ],
};
