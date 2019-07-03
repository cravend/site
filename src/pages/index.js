import React from 'react'
import Layout from '../components/layout'

import About from '../components/About'
import Footer from '../components/Footer'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <About />
        <hr />
        <Footer />
      </Layout>
    )
  }
}

export default Index
