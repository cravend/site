import React from 'react'
import ProfilePicture from '../components/ProfilePicture.js'
import styled from 'styled-components'

const Header = styled.div`
  background: #a8dcd9;
  background: linear-gradient(60deg, #fbfffe 0%, #a8dcd9 100%);
  width: 100%;
  height: 250px;
  clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  margin: 0;
  padding: 0;

  display: flex;

  @media (max-width: 500px) {
    clip-path: inherit;
  }
`

const Content = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    align-items: normal;
  }
`

const Text = styled.div`
  text-align: right;
  margin-left: 20px;

  h1 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    text-transform: lowercase;
  }
`

const Picture = styled(ProfilePicture)`
  width: 125px;
  border-radius: 50%;
`

export default () => (
  <Header>
    <Content>
      <div>
        <Picture />
      </div>
      <Text>
        <h1>Dalton Craven</h1>
        <p>student & web developer</p>
      </Text>
    </Content>
  </Header>
)
