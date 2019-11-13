import React from 'react'
import { withTheme } from 'emotion-theming'
import { css, Global } from '@emotion/core'

const makeGlobalStyles = theme => css`
  body {
    background: ${theme.colors.inverse};
    color: ${theme.colors.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    color: ${theme.primary};
  }
`

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
))

export default GlobalStyles
