import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default () => (
  <div>
    <p style={{ float: 'left' }}>&copy; 2018 Dalton Craven</p>
    <p style={{ float: 'right' }}>
      <OutboundLink href="https://github.com/cravend/site">View source on GitHub</OutboundLink>
    </p>
  </div>
)
