module.exports = {
  siteMetadata: {
    title: `RECON X LOCI`,
    description: `VIDEO PRODUCTION - VIDEÓ KÉSZÍTÉS`,
    author: `@kurczloci`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: false, // false or exclude to disable tslint
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
