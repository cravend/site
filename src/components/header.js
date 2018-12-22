import React from 'react'
import Profile from '../components/profile.js'
import styled from 'styled-components'

const Header = styled.div`
  background: #a8dcd9;
  background: linear-gradient(291.27deg, #a8dcd9 0%, #fbfffe 100%);
  width: 100%;
  height: 220px;
  clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  margin: 0;
  padding: 0;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 650px;
  height: 220px;
  padding: 3rem 1rem;
`

const Text = styled.div`
  width: 75%;
  float: right;
  text-align: right;
  text-transform: uppercase;
  @media (max-width: 400px) {
    width: 100%;
    text-align: center;
  }
`

const Picture = styled(Profile)`
  width: 25%;
  max-width: 125px;
  float: left;
  border-radius: 50%;
  /* Smaller than mobile */
  @media (max-width: 400px) {
    display: none;
  }
`

export default () => (
  <Header>
    <Content>
      <div>
        <Picture />
      </div>
      <Text>
        <h1>Dalton Craven</h1>
        <p style={{ textTransform: 'lowercase' }}>
          Web developer, high school student
        </p>
      </Text>
    </Content>
  </Header>
)
