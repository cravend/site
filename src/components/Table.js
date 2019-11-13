import React from 'react'
import styled from '@emotion/styled'

import { StyledLink } from '../components/Link'

export const NameCol = ({ item }) => (
  <td>
    {item['link'] ? (
      <StyledLink to={item['link']}>{item['name']}</StyledLink>
    ) : (
      item['name']
    )}
  </td>
)

const StyledHeading = styled.h3`
  margin-bottom: 5px;
`

const StyledNameCol = styled(NameCol)`
  @media (min-width: ${({ theme }) => theme.breakpoint}) {
    width: 230px;
  }
`
const RoleCol = styled.td`
  @media (min-width: ${({ theme }) => theme.breakpoint}) {
    width: 350px;
  }
`

const DateCol = styled.td`
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
          <th>Name</th>
          <th>Role</th>
          <th style={{ textAlign: 'right' }}>Date</th>
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
