import React from "react"
import styled from "styled-components"

const Card = styled.a`
  display: block;
  width: 23%;
  margin: 1%;
  padding: 10px;
  border-radius: 10px;
  color: inherit;
  text-decoration: none;
  background-color: #EAF8F7;
  text-align: center;

  @media (max-width: 600px) {
    width: 48%;
    margin: 5px 0;
  }
`

export default ( {name, url} ) => (
  <Card href={url}>
    <h3 style={{margin: 0}}>{name}</h3>
  </Card>
)
