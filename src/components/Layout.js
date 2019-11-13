import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Container from '../components/Container'

export default ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="Description"
        content="The digital home of Dalton Craven, high school student and up-and-coming developer."
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta
        name="google-site-verification"
        content="_c1_yEb71UBmjlzuIulT64zHDVHf_2YORhCw48AnHW8"
      />
      <link rel="canonical" href="https://www.daltoncraven.me" />
      <title>Dalton Craven</title>
    </Helmet>
    <Header />
    <Container>{children}</Container>
  </>
)
