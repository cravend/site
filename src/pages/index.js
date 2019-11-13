import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/seo'

import About from '../components/About'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Container>
          <About />
        </Container>
      </Layout>
    )
  }
}

export default Index
