import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)

  if (internal) {
    if (file) {
      return (
        <OutboundLink href={to} {...other}>
          {children}
        </OutboundLink>
      )
    }
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: inherit;
  border-bottom: 2px solid;
  :hover,
  :focus,
  :active {
    border-bottom: 3px solid #a8dcd9;
  }
`

export const StyledLinkOld = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: inherit;
  position: relative;
  overflow: hidden;
  :before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    background-color: #fff;
    height: 2px;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  :hover:before,
  :focus:before,
  :active:before {
    background-color: #a8dcd9;
    left: 0;
    right: 0;
  }
`
export default Link
