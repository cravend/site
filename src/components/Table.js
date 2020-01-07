import React from 'react'
import styled from '@emotion/styled'

import { StyledLink } from '../components/Link'

const StyledHeader = styled.th`
  border-color: ${({ theme }) => theme.colors.primary};
`
const StyledData = styled.td`
  border-color: ${({ theme }) => theme.colors.primary};
`

export const NameCol = ({ item }) => (
  <StyledData>
    {item['link'] ? (
      <StyledLink to={item['link']}>{item['name']}</StyledLink>
    ) : (
      item['name']
    )}
  </StyledData>
)

const StyledHeading = styled.h3`
  margin-bottom: 5px;
`

const StyledNameCol = styled(NameCol)`
  @media (min-width: ${({ theme }) => theme.breakpoint}) {
    width: 230px;
  }
`
const RoleCol = styled(StyledData)`
  @media (min-width: ${({ theme }) => theme.breakpoint}) {
    width: 350px;
  }
`

const DateCol = styled(StyledData)`
  text-align: right;
  @media (min-width: ${({ theme }) => theme.breakpoint}) {
    width: 120px;
  }
`

export default ({ title, data }) => (
  <>
    <StyledHeading>{title}</StyledHeading>
    <table>
      <thead>
        <tr>
          <StyledHeader>Name</StyledHeader>
          <StyledHeader>Role</StyledHeader>
          <StyledHeader style={{ textAlign: 'right' }}>Date</StyledHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <StyledNameCol item={item} />
              <RoleCol>{item['role']}</RoleCol>
              <DateCol>{item['date']}</DateCol>
            </tr>
          )
        })}
      </tbody>
    </table>
  </>
)
