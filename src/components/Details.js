import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Table from '../components/Table'

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            events {
              name
              link
              role
              date
            }
            work {
              name
              role
              date
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Table title="Events" data={data.site.siteMetadata.events} />
        <Table title="Work Experience" data={data.site.siteMetadata.work} />
      </>
    )}
  />
)
