module.exports = {
  siteMetadata: {
    title: 'Dalton Craven'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/dalton-craven.jpg',
        injectHTML: true
      }
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dalton Craven`,
        short_name: `Dalton Craven`,
        start_url: `/`,
        background_color: `#a8dcd9`,
        theme_color: `#000000`,
        icon: `src/images/dalton-craven.jpg`
      }
    },
    `gatsby-plugin-offline`
  ]
}
