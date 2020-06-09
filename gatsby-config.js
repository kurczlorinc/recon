require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Recon Films`,
    description: `esküvő, rendezvény, koncert, brand videó`,
    author: `@kurczloci`,
    siteUrl: `https://www.reconfilms.hu`,
    image: `../images/recon_og.png`,
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `hu`],
        // language file path
        defaultLanguage: `hu`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `kurczloci`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
        routeChangeEventName: "gatsby-route-change",
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
