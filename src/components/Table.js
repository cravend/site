import React from 'react'
import styled from 'styled-components'

import { breakpoints, StyledOutboundLink } from '../components/Theme'

export const NameCol = ({ item }) => (
  <td>
    {item['link'] ? (
      <StyledOutboundLink href={item['link']}>
        {item['name']}
      </StyledOutboundLink>
    ) : (
      item['name']
    )}
  </td>
)

const StyledHeading = styled.h3`
  margin-bottom: 5px;
`

const StyledNameCol = styled(NameCol)`
  @media (min-width: ${breakpoints.desktop}) {
    width: 230px;
  }
`
const RoleCol = styled.td`
  @media (min-width: ${breakpoints.desktop}) {
    width: 350px;
  }
`

const DateCol = styled.td`
  text-align: right;
  @media (min-width: ${breakpoints.desktop}) {
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
