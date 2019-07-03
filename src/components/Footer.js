import React from 'react'
import styled from 'styled-components'
import { StyledOutboundLink } from '../components/Theme'

const First = styled.p`
  margin-bottom: 0;
  @media (min-width: 500px) {
    float: left;
    display: block;
  }
`
const Second = styled.p`
  @media (min-width: 500px) {
    float: right;
    display: block;
  }
`

export default () => (
  <div>
    <First>&copy; 2019 Dalton Craven</First>
    <Second>
      <StyledOutboundLink href="https://github.com/cravend/site">
        View Source on GitHub
      </StyledOutboundLink>
    </Second>
  </div>
)
