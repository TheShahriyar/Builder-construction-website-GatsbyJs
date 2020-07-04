/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:400,400i,600,600i,700,800`,
          `Roboto\:400,400i,500,500i,700,700i,900`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
