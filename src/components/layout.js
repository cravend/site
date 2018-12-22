import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import styled from "styled-components"
import "./layout.css"

const Container = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;



  @media (max-width: 600px) {
    padding: 10px;
  }
`

export default ({ children }) => (
  <>
  <Helmet>
    <html lang="en" />
    <meta name="docsearch:version" content="2.0" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
    />
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,700" rel="stylesheet" />
  </Helmet>
  <Header />
  <Container>
    {children}
  </Container>
  </>
)