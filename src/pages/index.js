import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Details from '../components/Details'
import SEO from '../components/SEO'

import About from '../components/About'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Container>
          <About />
          <Details />
        </Container>
      </Layout>
    )
  }
}

export default Index
