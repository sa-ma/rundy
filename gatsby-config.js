/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`, {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `work sans`,
        `source sans pro\:400,600,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }],
}
