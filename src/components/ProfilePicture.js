import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Profile = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        profile: file(relativePath: { eq: "dalton-craven.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 125) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img fluid={data.profile.childImageSharp.fluid} className={className} />
    )}
  />
)
export default Profile
