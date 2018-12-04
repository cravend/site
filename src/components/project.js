import React from 'react'
// import { Link } from 'gatsby'

export default ( {name, description} ) => (
  <a href="#" style={{ height: 125, padding: 10, borderRadius: 20, backgroundColor: "#EAF8F7", color: "inherit", textDecoration: "none" }} className="six columns">
      <h4>{name}</h4>
      <p>{description}</p>
  </a>
)
