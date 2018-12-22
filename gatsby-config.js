module.exports = {
  siteMetadata: {
    title: 'Dalton Craven'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `700`]
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dalton Craven`,
        short_name: `DJC`,
        start_url: `/`,
        background_color: `#a8dcd9`,
        theme_color: `#000000`,
        icon: `src/images/dalton-craven-round.png`,
        display: 'browser'
      }
    },
    `gatsby-plugin-remove-serviceworker`
  ]
}
