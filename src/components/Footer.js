import React from 'react'
import { css } from '@emotion/core'

import Container from '../components/Container'
import { StyledLink } from '../components/Link'

export default () => (
  <footer>
    <Container
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
      `}
    >
      <p>&copy; 2019 Dalton Craven</p>
      <p>
        <StyledLink to="https://github.com/cravend/site">
          View Source on GitHub
        </StyledLink>
      </p>
    </Container>
  </footer>
)
