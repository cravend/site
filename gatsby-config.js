module.exports = {
  siteMetadata: {
    title: 'Dalton Craven',
    description: 'The digital home of Dalton Craven, student and developer.',
    author: '@cravend123',
    siteUrl: 'https://daltoncraven.me',
    events: [
      {
        name: 'Hack Cincinnati',
        link: 'https://hackcincinnati.io',
        role: 'Branding & Web Development',
        date: 'July 2019'
      },
      {
        name: 'Hack Camp 2019',
        link: 'https://camp.masonhackclub.com',
        role: 'Senior Advisor',
        date: 'July 2019'
      },
      {
        name: 'CincyHacks Jr.',
        link: 'https://jr.cincyhacks.com',
        role: 'Senior Advisor',
        date: 'April 2019'
      },
      {
        name: 'Hack Camp 2018',
        link: 'https://2018.camp.masonhackclub.com',
        role: 'Camp Director',
        date: 'July 2018'
      },
      {
        name: 'CincyHacks 2017',
        link: 'https://2017.cincyhacks.com',
        role: 'Finance Director',
        date: 'Sept. 2017'
      },
      {
        name: 'Hack Camp 2017',
        link: 'https://2017.camp.masonhackclub.com',
        role: 'Camp Director',
        date: 'June 2017'
      }
    ],
    work: [
      {
        name: 'Cincinnati Public Library',
        role: 'Branch Computer Assistant',
        date: 'May 2015–May 2019'
      },
      {
        name: 'Mason High School',
        role: 'Server Administrator',
        date: 'Aug. 2015–May 2019'
      },
      {
        name: 'Kings Island',
        role: 'Food & Beverage Associate',
        date: 'Aug. 2016–June 2019'
      },
      {
        name: 'Abre.io',
        role: 'Software Development Intern',
        date: 'May 2018–July 2018'
      },
      {
        name: 'Various Views Research',
        role: 'Web Design Intern',
        date: 'July 2017–Aug. 2017'
      },
      {
        name: 'City of Mason, Ohio',
        role: 'IT Intern',
        date: 'Nov. 2016–Feb. 2017'
      }
    ]
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-38154009-2'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify`
  ]
}
