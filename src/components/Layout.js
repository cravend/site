import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { lightTheme, darkTheme } from '../components/Theme'
import GlobalStyles from '../components/Global'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false
    }
  }

  setLightMode = () => {
    this.setState({ darkMode: false })
  }

  setDarkMode = () => {
    this.setState({ darkMode: true })
  }

  componentDidMount() {
    this.setState({
      darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addListener(e => e.matches && this.setDarkMode())
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addListener(e => e.matches && this.setLightMode())
    window
      .matchMedia('(prefers-color-scheme: no-preference)')
      .addListener(e => e.matches && this.setLightMode())
  }

  render() {
    return (
      <ThemeProvider theme={this.state.darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
