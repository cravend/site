import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"

import '../components/css/normalize.css'
import '../components/css/skeleton.css'

export default ({ children }) => (
  <>
  <Helmet>
    <html lang="en" />
    <meta name="docsearch:version" content="2.0" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
    />
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,800" rel="stylesheet" />
  </Helmet>
  <Header />
  <div className="container" style={{ maxWidth: 650 }}>
    {children}
  </div>
  </>
)
