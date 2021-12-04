module.exports = {
  siteMetadata: {
    siteUrl: "https://lewismwaki.dev",
    title: "lewismwaki.dev",
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: `/`,
        background_color: `#ffff00`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
  ],
};
