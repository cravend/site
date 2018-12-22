import React from "react"
import styled from "styled-components"

const Card = styled.a`
  padding: 10px;
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
  display: block;
  background-color: #EAF8F7;
  width: 48%;
  margin: 1%;
  height: 125px;

  @media (max-width: 600px) {
    width: 100%;
    margin: 5px 0;
  }
`

export default ( {name, description, url} ) => (
  <Card href={url}>
      <h3>{name}</h3>
      <p>{description}</p>
  </Card>
)
