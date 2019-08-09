import React from 'react'
import Layout from '../components/Layout'

import About from '../components/About'
import Footer from '../components/Footer'

import Table from '../components/Table'
import data from '../data.json'

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
